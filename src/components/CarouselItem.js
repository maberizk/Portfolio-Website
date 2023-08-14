import React from "react";

export const CarouselItem = ({ image }) => {
    return (
        <div className="carousel-item">
            <img className="carousel-img" src={image} alt={image} />
        </div>
    )
}