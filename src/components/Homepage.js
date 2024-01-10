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

const Homepage = () => {
  return (
    <>
      <>
        {/* <img src={oceanImg} className="backgroundImg" /> */}
        {/* <Navbar /> */}
        <div className="homeBlock">
          <Marquee pauseOnHover={true}>
            <h1 className="marqueeText">Michelle Aberizk </h1>
            <h1> </h1>
            <h1>Software Engineer</h1>
          </Marquee>
          {/* <h1 data-aos="fade-down">Michelle Aberizk</h1> */}
          {/* <div className="animationContainer">
            <AnimatedText text="Software Designer + Engineer" />
        </div> */}
          {/* <h2 data-aos="fade-up">Software Engineer</h2> */}
        </div>
        <Portfolio />
        <About />
      </>
      <Footer />
    </>
  );
};

export default Homepage;
