import React from "react";
import { Link } from "react-router-dom";
import { useBucket } from "../../context/AppContext";

export default function Transaction() {
    const { logout } = useBucket()

    return (
        <div className="text-3xl font-bold text-gray-50">
            <div>
                Transaction Page
            </div>
            <Link to={"/"}>
                Back
            </Link>
            <div onClick={() => logout()}>
                Logout
            </div>
        </div>
    )
}