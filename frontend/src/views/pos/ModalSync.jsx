import { Button, Label, Progress } from "flowbite-react";
import React from "react";
import { useEffect } from "react";
import Modal from "../components/Modal";
import { EventsOn, EventsOff } from "../../../wailsjs/runtime";
import { useState } from "react";

export default function ModalSync() {
    const [progress, setProgress] = useState([]);
    const [isShow, setShow] = useState(false)

    const handleSyncProgress = (data) => {
        const name = data[0]
        const estimate = (data[1]/data[2]) * 100
        const isExist = progress.find(p => p.name === name)

        if(isExist) {
            setProgress(progress.map(p => {
                if(p.name === name) {
                    return {
                        ...p,
                        progress: estimate
                    }
                }
                return p
            }))
        } else {
            setProgress(progress.concat({
                name: name,
                progress: estimate
            }))
        }
        setShow(true)
    }

    const totalProgress = progress.reduce((acc, cv) => acc + cv.progress, 0) 
    const closeShow = totalProgress === (progress.length * 100)

    const handleClose = () => {
        setShow(false)
    }

    useEffect(() => {
        EventsOn("sync_progress", handleSyncProgress)
        return () => EventsOff("sync_progress")
    })

    return (
        <Modal
            isOpen={isShow}
            toggle={() => setShow(false)}
            title={"Updating data"}
        >
            {progress.map(p => (
                <div>
                    <Label>{p.name}</Label>
                    <Progress progress={p.progress} key={p.name}/>
                </div>
            ))}

            {closeShow && (
                <div className="w-full pt-4 flex justify-end">
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                </div>
            )}
        </Modal>
    )
}