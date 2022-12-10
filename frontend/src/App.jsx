import React, { useState } from "react";
import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Progress } from "flowbite-react";
import { ToastContainer, toast } from 'react-toastify';
import { EventsOn, EventsOff } from "../wailsjs/runtime";

import { AppProvider } from "./context/AppContext";
import ErrorBoundary from "./context/ErrorBoundry";
import Login from "./views/auth/Login";
import Transaction from "./views/pos/Transaction";

function App() {
    const [progress, setProgrees] = useState(0)

    useEffect(() => {
        EventsOn("toast_general", (message) => {
            toast(message)
        })
        
        EventsOn("sync_progrees", (percent) => {
            console.log(percent)
            setProgrees((percent[1]/percent[0]) * 100)
        })

        return () => EventsOff("toast_general", "sync_progrees")
    })

    return (
        <AppProvider>
            <ErrorBoundary>
                <HashRouter>
                    <Progress progress={progress} />
                    <Routes>
                        <Route path="/" element={<Login />} exact />
                        <Route path="/transaction" element={<Transaction/>} exact />
                    </Routes>
                </HashRouter>
            </ErrorBoundary>
            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="dark"
            />
        </AppProvider>
    )
}

export default App
