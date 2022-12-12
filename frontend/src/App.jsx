import React from "react";
import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { EventsOn, EventsOff } from "../wailsjs/runtime";

import { AppProvider } from "./context/AppContext";
import ErrorBoundary from "./context/ErrorBoundry";
import Login from "./views/auth/Login";
import Transaction from "./views/pos/Transaction";

function App() {
    useEffect(() => {
        EventsOn("toast_general", (message) => {
            toast(message)
        })

        return () => EventsOff("toast_general")
    })

    return (
        <AppProvider>
            <ErrorBoundary>
                <HashRouter>
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
