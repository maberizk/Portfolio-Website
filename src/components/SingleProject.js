// import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { projects } from "../data";
// import { useParams } from "react-router-dom";
// import { Carousel } from "./Carousel";
// import Contact from "./Contact";

// export default function SingleProject() {
//   const { id } = useParams();

//   const project = projects.find((project) => project.id === parseInt(id));

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="projectPage">
//         <div data-aos="fade-right" className="project-details">
//           <div className="projectHeader">
//             <h2 className="projectTitle">{project.title}</h2>
//           </div>
//           <p className="projectRole">
//             <span className="bold">Role:</span> <br></br>
//             {project.role}
//           </p>
//           <br></br>
//           <p>
//             <span className="bold">Overview:</span> <br></br>
//             {project.about}
//           </p>
//           <br></br>
//           <p>
//             <span className="bold">Link:</span> <br></br>
//           </p>
//           <a className="projectLink" target="_blank" href={project.link}>
//             {project.linkTitle}
//           </a>
//         </div>
//         <div data-aos="fade-left">
//           <div style={{ maxWidth: "100vw", overflow: "hidden" }}>
//             <Carousel />
//           </div>
//         </div>
//       </div>
//       {/* <Footer /> */}
//       {/* <Contact /> */}
//     </div>
//   );
// }

import React from "react";
import Navbar from "./Navbar";
import { projects } from "../data";
import { useParams } from "react-router-dom";
import { Carousel } from "./Carousel";
import Marquee from "react-fast-marquee";

export default function SingleProject() {
  const { id } = useParams();

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="projectPage">
        <Marquee pauseOnHover={true} speed={70}>
          <h2 className="project-title">{project.title}</h2>
        </Marquee>
        <div data-aos="fade-right" className="project-details">
          <p className="projectRole projectText">
            <span className="bold">Role:</span> <br></br>
            {project.role}
          </p>

          <p className="projectOverview projectText">
            <span className="bold">Overview:</span> <br></br>
            {project.about}
          </p>

          <p>
            <span className="bold">Link:</span> <br></br>
            <a
              className="projectLink projectText"
              target="_blank"
              href={project.link}
            >
              {project.linkTitle}
            </a>
          </p>
        </div>

        {/* <div data-aos="fade-down">
          {project.images.map((image, index) => {
            return (
              <img
                // className="carousel-img"
                key={index}
                src={image}
                alt={image}
              />
            );
          })}
        </div> */}

        <div data-aos="fade-left">
          <div style={{ maxWidth: "100vw", overflow: "hidden" }}>
            
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}
