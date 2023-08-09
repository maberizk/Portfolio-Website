
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';
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
        <Carousel>
            <Carousel.Item interval={1000}>
                <ExampleCarouselImage text={project.title} />
                <Carousel.Caption>
                    <h3>{project.title}</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <ExampleCarouselImage text="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

