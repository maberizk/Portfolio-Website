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
              <span className="bold"> UX designer</span> based in Los Angeles.
            </p>
            <p className="text2">
              I am currently specializing in{" "}
              <span className="bold">Squarespace </span> marketing websites and
              <span className="bold"> Shopify </span> e-commerce websites -
              providing initial store development, design refreshes and updating
              themes.
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
