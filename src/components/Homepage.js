import ReactDOM from "react-dom";
import React, { useEffect, useRef } from "react";
import Portfolio from "./Portfolio";
import About from "./About";
import Marquee from "react-fast-marquee";
import Contact from "./Contact";

const Homepage = () => {
  return (
    <>
      <>
        <About />
        <Marquee pauseOnHover={true} speed={70}>
          <h1 className="aboutHeader">WORK</h1>
        </Marquee>
        <Portfolio />
      </>
      <Marquee pauseOnHover={true} speed={70}>
        <h1 className="aboutHeader">CONTACT</h1>
      </Marquee>
      <Contact />
    </>
  );
};

export default Homepage;
