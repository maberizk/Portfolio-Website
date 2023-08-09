import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { projects } from "../data";
import { NavLink } from 'react-router-dom';

export default function Portfolio() {

    return (
        <div className="portfolio">
            <Navbar />
            <div data-aos="fade-up" className="portfolioProjects">
                {projects.map((project) => (

                    <NavLink to={`/portfolio/${project.id}`} className="projectCard">
                        <img
                            src={project.image}
                            className="project_image"
                            alt={project.title}
                            key={project.id}
                        />
                        <div className="image_overlay">
                            <h3 className="image_title">{project.title}</h3>
                            <p className="image_description">{project.description}</p>
                        </div>
                    </NavLink>
                ))}
            </div>
            <Footer />
        </div>
    );
}
