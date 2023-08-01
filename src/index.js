
// import React from "react";
// import { createRoot } from "react-dom/client";
// import Main from "./components/Main";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";

// const root = createRoot(document.getElementById("app"));

// root.render(
//     <Router basename="/">
//         <Routes>
//             <Route path="*" element={<Main />} />
//         </Routes>
//     </Router>
// )

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import SingleProject from "./components/SingleProject";

const Main = () => {
    return (
        <Router>
            <div>
                <main>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/portfolio/:id" element={<SingleProject />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

const root = createRoot(document.getElementById("app"));
root.render(<Main />)