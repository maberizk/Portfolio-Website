// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { projects } from "../data";
// import { NavLink, useParams } from 'react-router-dom';


// export default function SingleProject() {
//     const { id } = useParams();

//     const project = projects.find((project) => project.id === parseInt(id));

//     if (!project) {
//         return <div>Project not found</div>;
//     }

//     return (
//         <div className="projectPage">
//             <Navbar />
//             <div>
//                 <div className="singleProject_info">
//                     <div className="singleProject_header">
//                         <h1>{project.title}</h1>
//                         <p>{project.role}</p>
//                         <p>{project.description}</p>
//                     </div>
//                     <p>{project.about}</p>
//                 </div>
//                 <div className="singleProject">
//                     {project.images.map((image, index) => (
//                         <img
//                             key={index}
//                             src={image}
//                             className="singleProject_images"
//                             alt={`${project.title} - Image ${index + 1}`}
//                         />
//                     ))}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// import Carousel from 'react-bootstrap/Carousel';
// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { projects } from "../data";
// import { NavLink, useParams } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';


// export default function SingleProject() {
//     const { id } = useParams();

//     const project = projects.find((project) => project.id === parseInt(id));

//     if (!project) {
//         return <div>Project not found</div>;
//     }
//     return (
//         <div className='projectPage'>
//             <Navbar />
//             <div className="singleProject_info">
//                 <div className="singleProject_header">
//                     <h1>{project.title}</h1>
//                     <p>{project.description}</p>
//                 </div>
//                 <p>{project.about}</p>
//             </div>
//             <div className="carousel">
//                 <Carousel>
//                     {project.images.map((image, index) => (
//                         <Carousel.Item key={index} interval={3000}>
//                             <img
//                                 src={image}
//                                 className="singleProject_images"
//                                 alt={`${project.title} - Image ${index + 1}`}
//                             />
//                             <Carousel.Caption>
//                                 {/* <h3>{project.title}</h3>
//                                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
//                             </Carousel.Caption>
//                         </Carousel.Item>
//                     ))}
//                 </Carousel>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { projects } from "../data";
// import { NavLink, useParams } from 'react-router-dom';


// export default function SingleProject() {
//     const { id } = useParams();

//     const [activeIndex, setActiveIndex] = useState(0)

//     const project = projects.find((project) => project.id === parseInt(id));

//     if (!project) {
//         return <div>Project not found</div>;
//     }

//     const updateIndex = (newIndex) => {
//         if (newIndex < 0) {
//             newIndex = 0;
//         }
//         else if (newIndex >= project.length) {
//             newIndex = project.length - 1
//         }

//         setActiveIndex(newIndex)
//     }

//     return (
//         <div className="projectPage">
//             <Navbar />
//             <div>
//                 <div className="singleProject_info">
//                     <div className="singleProject_header">
//                         <h1>{project.title}</h1>
//                         <p>{project.role}</p>
//                         <p>{project.description}</p>
//                     </div>
//                     <p>{project.about}</p>
//                 </div>

//                 <div className="singleProject">
//                     <div className='inner'
//                         style={{ transform: `translate(-${activeIndex * 100}%)` }}
//                     >
//                         {project.images.map((image, index) => (
//                             <img
//                                 key={index}
//                                 src={image}
//                                 className="singleProject_images"
//                                 alt={`${project.title} - Image ${index + 1}`}
//                             />
//                         ))}
//                     </div>
//                 </div>
//                 <div className="carButtons">
//                     <button onClick={() => {
//                         updateIndex(activeIndex - 1)
//                     }} className="buttonArrow"><span class="material-symbols-outlined">
//                             arrow_back_ios
//                         </span></button>
//                     <div className="indicators">
//                         <button className="indicatorButton"><span class="material-symbols-outlined">
//                                 radio_button_checked
//                             </span></button>
//                         <button className="indicatorButton"><span class="material-symbols-outlined">
//                             radio_button_checked
//                         </span></button>
//                         <button className="indicatorButton"><span class="material-symbols-outlined">
//                             radio_button_checked
//                         </span></button>
//                     </div>
//                     <button onClick={() => {
//                         updateIndex(activeIndex + 1)
//                     }} className="buttonArrow"><span class="material-symbols-outlined">
//                             arrow_forward_ios
//                         </span></button>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }


import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { projects } from "../data";
import { NavLink, useParams } from 'react-router-dom';
import { Carousel } from "./Carousel"


export default function SingleProject() {
    const { id } = useParams();

    const [activeIndex, setActiveIndex] = useState(0)

    const project = projects.find((project) => project.id === parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        }
        else if (newIndex >= project.length) {
            newIndex = project.length - 1
        }

        setActiveIndex(newIndex)
    }

    return (
        <div className="projectPage">

            <div>
                <Carousel />
            </div>
        </div>
    );
}