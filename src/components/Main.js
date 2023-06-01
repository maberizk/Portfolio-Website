import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Portfolio from './Portfolio';
import About from './About';

export default function Main() {
    return (
        <div>
            <main>
                <Routes>
                    <Route path="*" element={<Homepage />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
        </div>
    );
}
