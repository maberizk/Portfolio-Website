import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { projects } from "../data";
import { NavLink, useParams } from 'react-router-dom';


export default function SingleProject() {
    const projectId = useParams();
    console.log(projectId)
    return (
        <div className="portfolio">
            <Navbar />
            <div>
                <h1>{projects[projectId.id].title}</h1>
                <p></p>
            </div>
            <Footer />
        </div>
    );
}