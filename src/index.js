import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import SingleProject from "./components/SingleProject";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

const Main = () => {
  return (
    <Router>
      <>
        <ErrorBoundary className="error" fallback={"Error"}>
          <main>
            <Routes>
              <Route path="*" element={<Homepage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:id" element={<SingleProject />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </ErrorBoundary>
      </>
    </Router>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<Main />);
