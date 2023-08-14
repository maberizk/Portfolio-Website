// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { projects } from "../data";
// import { NavLink } from 'react-router-dom';
//  import SingleProject from './SingleProject';

// export default function Portfolio() {

//     const [openProject, setOpenProject] = useState(null);

//     const handleProjectClick = (projectId) => {
//         setOpenProject(openProject === projectId ? null : projectId);
//     };

//     return (
//         <div className="portfolio">
//             <Navbar />
//             <div data-aos="fade-down" className="portfolioProjects">
//                 {projects.map((project) => (

//                     <NavLink 
//                         to={`/portfolio/${project.id}`}
//                         key={project.id} 
//                         className={`projectCard ${openProject === project.id ? 'open' : ''}`}
//                         >
                       

//                         <img
//                             src={project.image}
//                             className="project_image"
//                             alt={project.title}
//                         />
//                         <div className="image_overlay"
//                         onClick={() => handleProjectClick(project.id)}>
//                             <h3 className="image_title">{project.title}</h3>
//                             <p className="image_description">{project.description}</p>
//                         </div>
//                     </NavLink>
//                 ))}
//             </div>
//             <Footer />

//         </div>
//     );
// }


// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { projects } from "../data";
// import { NavLink } from 'react-router-dom';
// import SingleProject from './SingleProject';
// import Popup from './Popup';

// export default function Portfolio() {
//     const [buttonPopup, setButtonPopup] = useState(false)

//     return (
//         <div className="portfolio">
//             <Navbar />
//             {/* <button onClick={() => {
//                 setButtonPopup(true)
//             }}>Open Popup</button> */}
//             <div data-aos="fade-down" className="portfolioProjects">
//                 {projects.map((project) => (
                    
//                     <NavLink 
//                     to={`/portfolio/${project.id}`}
//                         key={project.id} className="projectCard"
//                         >

//                         <img
//                             src={project.image}
//                             className="project_image"
//                             alt={project.title}
//                         />
//                         <div className="image_overlay">
//                             <h3 className="image_title">{project.title}</h3>
//                             <p className="image_description">{project.description}</p>
//                         </div>
//                     </NavLink>
//                 ))}
                
//                 {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
//                     <h1>My Popup</h1>
//                 </Popup> */}
//             </div>
//             <Footer />

//         </div>
//     );
// }




import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { projects } from "../data";
import { NavLink } from 'react-router-dom';
 

export default function Portfolio() {


    return (
        <div className="portfolio">
            <Navbar />

            <div data-aos="fade-down" className="portfolioProjects">
                {projects.map((project) => (
                    
                    <NavLink 
                    to={`/portfolio/${project.id}`}
                        key={project.id} className="projectCard"
                        >

                        <img
                            src={project.image}
                            className="project_image"
                            alt={project.title}
                        />
                        <div className="image_overlay">
                            <h3 className="image_title">{project.title}</h3>
                            <p className="image_description">{project.description}</p>
                        </div>
                    </NavLink>
                ))}

            </div>
            <Footer />

        </div>
    );
}
