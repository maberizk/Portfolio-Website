import React, { useState } from "react";
// import { CarouselItem } from "./CarouselItem";
import { projects } from "../data"
import { useParams } from 'react-router-dom';
import { Swipeable } from 'react-swipeable';

export const Carousel = () => {
    const { id } = useParams();
    const project = projects.find((project) => project.id === parseInt(id));

    const [activeIndex, setActiveIndex] = useState(0)
    const [touchStartX, setTouchStartX] = useState(null);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        }
        else if (newIndex >= project.images.length) {
            newIndex = project.images.length - 1
        }
        setActiveIndex(newIndex)
    }


    const handleTouchStart = (event) => {
        setTouchStartX(event.touches[0].clientX);
    }

    const handleTouchEnd = (event) => {
        if (touchStartX !== null) {
            const touchEndX = event.changedTouches[0].clientX;
            const deltaX = touchEndX - touchStartX;

            if (deltaX > 50) { // Adjust the threshold as needed
                updateIndex(activeIndex - 1); // Swipe right
            } else if (deltaX < -50) { // Adjust the threshold as needed
                updateIndex(activeIndex + 1); // Swipe left
            }

            setTouchStartX(null);
        }
    }

    return (
        <div className="singleProject">

            <div className="carousel">

                <div
                    className="inner"
                    style={{ transform: `translate(-${activeIndex * 100}%` }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {project.images.map((image, index) => {
                        return <img className="carousel-img" key={index} src={image} alt={image} />
                    })}
                </div>

                <div className="carousel-buttons">
                    <button onClick={() => updateIndex(activeIndex - 1)} className="button-arrow"><span className={`material-symbols-outlined`}>
                        arrow_back_ios
                    </span></button>
                    <div className="indicators">
                        {project.images.map((image, index) => {
                            return (
                                <button
                                    key={index}
                                    className="indicator-button"
                                    onClick={() => { updateIndex(index) }}>
                                    <span className={`material-symbols-outlined ${index === activeIndex ? "indicator-symbol-active" : "indicator-symbol"}`}>
                                        radio_button_unchecked
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                    <button className="button-arrow" onClick={() => updateIndex(activeIndex + 1)}><span className={`material-symbols-outlined`}>
                        arrow_forward_ios
                    </span></button>
                </div>
            </div >
        </div >
    )
}

export default Carousel;