import { Button, Progress } from "flowbite-react";
import React from "react";
import { useEffect } from "react";
import Modal from "../components/Modal";
import { EventsOn, EventsOff } from "../../../wailsjs/runtime";
import { useState } from "react";

export default function ModalSync() {
    const [progress, setProgress] = useState(0);
    const [isShow, setShow] = useState(false)

    const handleSyncProgress = (data) => {
        console.log(data)
        const estimate = (data[1]/data[0]) * 100
        setProgress(estimate)
        setShow(true)
    }

    const closeShow = progress === 100

    const handleClose = () => {
        setShow(false)
    }

    useEffect(() => {
        EventsOn("sync_progrees",handleSyncProgress)
        return () => EventsOff("sync_progrees")
    })

    return (
        <Modal
            isOpen={isShow}
            title={"Updating data"}
        >
            <Progress progress={progress} />

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