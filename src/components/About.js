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
              <span className="bold"> UX designer</span> based in Oakland, CA.
            </p>
            {/* <p className="text2">
              Transitioning from the physical world as an interior designer to
              the digital world, I value{" "}
              <span className="bold">design, structure and efficency. </span> I
              really like <span className="bold">CSS </span> and building{" "}
              <span className="bold">responsive components</span> that are
              functional, beautiful, and interactive.
              </p> */}
              <p className="text2">
              Having transitioned from the physical world as an interior designer to
              the digital world, I value{" "}
              <span className="bold">structure and efficency. </span> I
               love <span className="bold">CSS </span> and building{" "}
              <span className="bold">responsive components</span> that are
              functional, beautiful, and interactive.
              </p>
              <br></br>
              <p>I created <a className="linktwo bold" href="https://www.part-time-design.com/" target="_blank">Part Time Design</a>, a studio where I design and develop custom Shopify and Squarespace websites.   <a className="linktwo" href="https://www.part-time-design.com/" target="_blank">View More</a></p>

          </div>
        </div>
        <div data-aos="fade-down" className="michelleImgContainer">
          <img src={michelleNoBG} className="michelleImg" />
        </div>
      </div>
    </div>
  );
}
