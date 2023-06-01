import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import neighborlyHome from '../../public/images/neighborlyHome.jpg'
import seasonsBloom from '../../public/images/seasonsBloom.png'
import powderBath from '../../public/images/powderBath.jpeg'
import { useState } from 'react'


// export default function Portfolio() {

//     const [isHovering, setIsHovering] = useState(false)

//     const handleMouseOver = () => {
//         setIsHovering(true)
//     }

//     const handleMouseOut = () => {
//         setIsHovering(false)
//     }
//     return (
//         <div className="portfolio">
//             <Navbar />
//             <div className="portfolioProjects">
//                 <div className="projectContainer" onMouseOver={handleMouseOver}
//                         onMouseOut={handleMouseOut}>

//                     <a href="project.html"><img src={neighborlyHome} className="project" /></a>

//                     {isHovering && (
//                         <div className="imageOverlay">
//                             <h2 className="imageText">UX Design Concept - Neighborly</h2>
//                         </div>)}
//                 </div>
//                 <div className="projectContainer" onMouseOver={handleMouseOver}
//                         onMouseOut={handleMouseOut}>
//                     <a href="project.html"><img src={seasonsBloom} className="project" /></a>
//                     {isHovering && (
//                         <div className="imageOverlay">
//                     <h2 className="imageText">UX Design Concept - Seasons Bloom</h2>
//                         </div>)}
//                 </div>
//                 <div className="projectContainer" onMouseOver={handleMouseOver}
//                         onMouseOut={handleMouseOut}>
//                     <a href="project.html"><img src={powderBath} className="project" /></a>
//                     {isHovering && (
//                         <div className="imageOverlay">
//                     <h2 className="imageText">Residential Interior - Design and Project Management</h2>
//                         </div>)}

//                 </div>

//             </div>
//             <Footer />
//         </div>
//     )
// }

export default function Portfolio() {
    const [hoveredProject, setHoveredProject] = useState(null);

    const handleMouseOver = (projectId) => {
        setHoveredProject(projectId);
    };

    const handleMouseOut = () => {
        setHoveredProject(null);
    };

    return (
        <div className="portfolio">
            <Navbar />
            <div className="portfolioProjects">
                <div
                    className="projectContainer"
                    onMouseOver={() => handleMouseOver('neighborly')}
                    onMouseOut={handleMouseOut}
                >
                    <a href="project.html">
                        <img src={neighborlyHome} className="project" alt="Neighborly Home" />
                    </a>
                    {hoveredProject === 'neighborly' && (
                        <div className="imageOverlay">
                            <h2 className="imageText">UX Design Concept - Neighborly</h2>
                        </div>
                    )}
                </div>
                <div
                    className="projectContainer"
                    onMouseOver={() => handleMouseOver('seasonsBloom')}
                    onMouseOut={handleMouseOut}
                >
                    <a href="project.html">
                        <img src={seasonsBloom} className="project" alt="Seasons Bloom" />
                    </a>
                    {hoveredProject === 'seasonsBloom' && (
                        <div className="imageOverlay">
                            <h2 className="imageText">UX Design Concept - Seasons Bloom</h2>
                        </div>
                    )}
                </div>
                <div
                    className="projectContainer"
                    onMouseOver={() => handleMouseOver('powderBath')}
                    onMouseOut={handleMouseOut}
                >
                    <a href="project.html">
                        <img src={powderBath} className="project" alt="Powder Bath" />
                    </a>
                    {hoveredProject === 'powderBath' && (
                        <div className="imageOverlay">
                            <h2 className="imageText">Residential Interior - Design and Project Management</h2>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}