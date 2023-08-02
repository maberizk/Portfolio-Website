import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { projects } from "../data";
import { NavLink, useParams } from 'react-router-dom';


export default function SingleProject() {
    const projectId = useParams();
    return (
        <div className="portfolio">
            <Navbar />
            <div>
                <h1>{projects[projectId.id - 1].title}</h1>
                <p>{projects[projectId.id - 1].description}</p>
                <img className="projectImage" src={projects[projectId.id - 1].image} />
            </div>
            <Footer />
        </div>
    );
}