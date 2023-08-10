import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import { projects } from "../data"
import { useParams } from 'react-router-dom';

export const Carousel = () => {
    const { id } = useParams();
    const project = projects.find((project) => project.id === parseInt(id));

    const [activeIndex, setActiveIndex] = useState(0)

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        }
        else if (newIndex >= project.images.length) {
            newIndex = project.images.length - 1
        }
        setActiveIndex(newIndex)
    }

    return (
        <div className="carousel">
            <div className="inner" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                {project.images.map((image, index) => {
                    return <CarouselItem key={image.id} image={image} width={"100%"} />
                })}
            </div>
            <div className="carousel-buttons">
                <button onClick={() => updateIndex(activeIndex - 1)} className="button-arrow"><span className={`material-symbols-outlined`}>
                    arrow_back_ios
                </span></button>
                <div className="indicators">
                    {project.images.map((image, index) => {
                        return (
                            <button className="indicator-button" onClick={() => {
                                updateIndex(index)
                            }}><span className={`material-symbols-outlined ${index === activeIndex ? "indicator-symbol-active" : "indicator-symbol"}`}>
                                    radio_button_unchecked
                                </span></button>

                        )
                    })}
                </div>
                <button className="button-arrow" onClick={() => updateIndex(activeIndex + 1)}><span className={`material-symbols-outlined`}>
                    arrow_forward_ios
                </span></button>
            </div>
        </div >
    )
}