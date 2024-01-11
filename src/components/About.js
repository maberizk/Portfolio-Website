import React from "react";
import michelleNoBG from "../../public/images/michelleBW.png";

export default function About() {
  return (
    <div className="about">
      <h3 data-aos="fade-left" className="aboutHeader">
        Hi, I'm Michelle
      </h3>

      <div className="aboutContainer">
        <div data-aos="fade-right" className="flexAbout">
          <div className="aboutText">
            <p className="text1">
              I'm a frontend software engineer and UX/UI designer based in Los
              Angeles.
            </p>
            <p className="text2">
              Transitioning from the physical world as an interior designer to
              the digital world, I am passionate about design, structure and
              efficency. I am interested in building responsive components that
              are functional, beautiful, and interactive.
            </p>
          </div>
        </div>
        <div data-aos="fade-down" className="michelleImgContainer">
          <img src={michelleNoBG} className="michelleImg" />
        </div>
      </div>
    </div>
  );
}
