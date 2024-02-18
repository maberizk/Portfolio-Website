import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { projects } from "../data";
import { useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";

export default function SingleProject() {
  const { id } = useParams();
  const currentProjectId = parseInt(id);

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentProjectId]);

  return (
    <div>
      <Navbar currentProjectId={currentProjectId} />
      <div className="projectPage">
        <Marquee pauseOnHover={true} speed={70} loop={1}>
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
        </div>

        <div data-aos="fade-down" className="images">
          {project.images.map((image, index) => {
            return (
              <img
                className="project-images"
                key={index}
                src={image}
                alt={image}
              />
            );
          })}
        </div>
        <a className="projectLink" target="_blank" href={project.link}>
          {project.linkTitle}
        </a>
      </div>
    </div>
  );
}
