import ReactDOM from "react-dom";
import React, { useEffect, useRef } from "react";
import anime from "animejs";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedText from "./AnimatedText";
import oceanImg from "../../public/images/Ocean.jpg";
import Portfolio from "./Portfolio";
import About from "./About";
import Marquee from "react-fast-marquee";
import Contact from "./Contact";

const Homepage = () => {
  return (
    <>
      <>
        <img src={oceanImg} className="backgroundImg" />
        <About />
        {/* <div className="homeBlock"> */}
        {/* <Marquee pauseOnHover={true}>
            <h1 className="marqueeText">Michelle Aberizk Software Engineer</h1>
            <h1> </h1>

          </Marquee> */}
        {/* <h1 data-aos="fade-down">Michelle Aberizk</h1> */}
        {/* <div className="animationContainer">
            <AnimatedText text="Software Designer + Engineer" />
        </div> */}
        {/* <h2 data-aos="fade-up">Software Engineer</h2> */}
        {/* </div> */}
        <Marquee pauseOnHover={true}>
          <h1 className="aboutHeader">WORK</h1>
        </Marquee>
        <Portfolio />
      </>
      <Marquee pauseOnHover={true}>
        <h1 className="aboutHeader">CONTACT</h1>
      </Marquee>
      <Contact />
    </>
  );
};

export default Homepage;
