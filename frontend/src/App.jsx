import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import ErrorBoundary from "./context/ErrorBoundry";
import Login from "./views/auth/Login";
import Transaction from "./views/pos/Transaction";

function App() {
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
        </AppProvider>
    )
}

export default App
