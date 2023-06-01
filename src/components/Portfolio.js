import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import neighborlyHome from '../../public/images/neighborlyHome.jpg'
import seasonsBloom from '../../public/images/seasonsBloom.png'
import powderBath from '../../public/images/powderBath.jpeg'


export default function Portfolio() {
    return (
        <div className="portfolio">
            <Navbar />
            <div className="porfolioProjects">
                <a href="project.html"><img src={neighborlyHome} className="project" /></a>
                <a href="project.html"><img src={seasonsBloom} className="project" /></a>
                <a href="project.html"><img src={powderBath} className="project" /></a>
            </div>
            <Footer />
        </div>
    )
}
