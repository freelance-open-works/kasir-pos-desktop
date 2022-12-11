import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBucket } from "../../context/AppContext";
import ModalSync from "./ModalSync";

export default function Transaction() {
    const { logout, user } = useBucket()

    const navigate = useNavigate()

    useEffect(() => {
        if (user === null) {
            navigate("/")
        }
    }, [user])

    return (
        <div className="text-3xl font-bold text-gray-50 bg-gray-900 min-h-screen">
            <div>
                Transaction Page
            </div>
            <Link to={"/"}>
                Back
            </Link>
            <Button onClick={() => logout()}>
                Logout
            </Button>
            <ModalSync/>
        </div>
    )
}