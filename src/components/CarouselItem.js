import React from "react";

export const CarouselItem = ({ image }) => {
    return (
        <div className="carousel-item">
            <div>
            </div>
            <img className="carousel-img" src={image} alt={image} />
        </div>
    )
}