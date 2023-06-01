
import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const root = createRoot(document.getElementById("app"));

root.render(
    <Router basename="/">
        <Routes>
            <Route path="*" element={<Main />} />
        </Routes>
    </Router>
)
