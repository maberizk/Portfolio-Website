import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { projects } from "../data";
import { NavLink, useParams } from 'react-router-dom';


export default function SingleProject() {
    const { id } = useParams(); // Make sure to use the correct property name, 'id'.

    const project = projects.find((project) => project.id === parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="projectPage">
            <Navbar />
            <div>
                <div className="singleProject_info">
                    <div className="singleProject_header">
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    </div>
                    <p>{project.about}</p>
                </div>
                <div className="singleProject">
                    {project.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className="singleProject_images"
                            alt={`${project.title} - Image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}