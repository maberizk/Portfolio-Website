import ReactDOM from "react-dom";
import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import Homepage from "./components/Homepage";


const root = createRoot(document.getElementById("app"));


const App = () => {

    return <Homepage />
}


root.render(<App />);