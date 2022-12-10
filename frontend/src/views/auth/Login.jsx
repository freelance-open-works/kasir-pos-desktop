import React from "react";
import { useState } from "react";
import { Button, TextInput,Label, Spinner } from 'flowbite-react';
import { useBucket } from "../../context/AppContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Login, SyncGet } from "wails/go/repository/Repository";
import { toast } from "react-toastify";

export default function LoginPage() {
    const { user, setUser } = useBucket()
    
    const navigate = useNavigate();

    const [isLoading, setLoading] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleKeyDown = e => {
        if(e.code === 'Enter') {
            submit()
        }
    }

    const submit = () => {
        setLoading(true)
        Login(username, password)
        .then(async (user) => {
            if (user !== null) {
                setUser(user)
                console.log(user)
                if(user.Sync === true) {
                    console.log(user.WarehouseId)
                    await SyncGet(user.WarehouseId)
                }
                return
            }
            toast.error("Username / Password Salah")
        })
        .finally(() => setLoading(false))
    }

    useEffect(() => {
        if (user) {
            navigate("/transaction")
        }
    }, [user])

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center bg-gray-900">
            <div className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                KasirAja POS
            </div>
            <div className="w-full max-w-md mt-6 px-6 py-4 bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                <form onSubmit={submit}>
                    <div>
                        <Label value="Username" />

                        <TextInput
                            type="text"
                            name="username"
                            value={username}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            autoFocus={true}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mt-4">
                        <Label value="Password" />

                        <TextInput
                            type="password"
                            name="password"
                            value={password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={e => setPassword(e.target.value)}
                            onKeyDownCapture={e => handleKeyDown(e)}
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Button onClick={submit} disabled={isLoading}>
                            {isLoading ? (
                                <Spinner/>
                            ) : ('Masuk')}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}