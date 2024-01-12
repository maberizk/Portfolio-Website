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
              I am a <span className="bold">frontend software engineer </span> +
              <span className="bold"> UX/UI designer</span> based in Los
              Angeles.
            </p>
            <p className="text2">
              Transitioning from the physical world as an interior designer to
              the digital world, I value{" "}
              <span className="bold">design, structure and efficency. </span> I
              really like <span className="bold">CSS </span> and building{" "}
              <span className="bold">responsive components</span> that are
              functional, beautiful, and interactive.
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
