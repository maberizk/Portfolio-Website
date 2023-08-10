import React from "react";
import { CarouselItem } from "./CarouselItem";
import { projects } from "../data"
import { NavLink, useParams } from 'react-router-dom';

export const Carousel = () => {

    const { id } = useParams();
    const project = projects.find((project) => project.id === parseInt(id));
    console.log(project.images)
    return (
        <div className="carousel">
            <div className="inner">
                {project.images.map((image, index) => {
                    return <CarouselItem key={index} image={image} />

                })}
            </div>
        </div>
    )
}