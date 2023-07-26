// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
// import neighborlyHome from '../../public/images/neighborlyHome.jpg'
// import seasonsBloom from '../../public/images/seasonsBloom.png'
// import powderBath from '../../public/images/powderBath.jpeg'
// import { useState } from 'react'

// export default function Portfolio() {
//     const [hoveredProject, setHoveredProject] = useState(null);

//     const handleMouseOver = (projectId) => {
//         setHoveredProject(projectId);
//     };

//     const handleMouseOut = () => {
//         setHoveredProject(null);
//     };

//     return (
//         <div className="portfolio">
//             <Navbar />
//             <div className="portfolioProjects">
//                 <div
//                     className="projectContainer"
//                     onMouseOver={() => handleMouseOver('neighborly')}
//                     onMouseOut={handleMouseOut}
//                 >
//                     <a href="project.html">
//                         <img src={neighborlyHome} className="project" alt="Neighborly Home" />
//                     </a>
//                     {hoveredProject === 'neighborly' && (
//                         <div className="imageOverlay">
//                             <h2 className="imageText">UX Design Concept - Neighborly</h2>
//                         </div>
//                     )}
//                 </div>
//                 <div
//                     className="projectContainer"
//                     onMouseOver={() => handleMouseOver('seasonsBloom')}
//                     onMouseOut={handleMouseOut}
//                 >
//                     <a href="project.html">
//                         <img src={seasonsBloom} className="project" alt="Seasons Bloom" />
//                     </a>
//                     {hoveredProject === 'seasonsBloom' && (
//                         <div className="imageOverlay">
//                             <h2 className="imageText">UX Design Concept - Seasons Bloom</h2>
//                         </div>
//                     )}
//                 </div>
//                 <div
//                     className="projectContainer"
//                     onMouseOver={() => handleMouseOver('powderBath')}
//                     onMouseOut={handleMouseOut}
//                 >
//                     <a href="project.html">
//                         <img src={powderBath} className="project" alt="Powder Bath" />
//                     </a>
//                     {hoveredProject === 'powderBath' && (
//                         <div className="imageOverlay">
//                             <h2 className="imageText">Residential Interior - Design and Project Management</h2>
//                         </div>
//                     )}

//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'
import { projects } from "../data"

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
            <div>
                {projects.map((project) => (
                    <a
                        href={project.link}
                        key={project.title}>
                        <div>
                            <img
                                alt="gallery"
                                src={project.image}
                            />
                            {console.log(project.image)}
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))}

            </div>
            <Footer />
        </div>
    );
}