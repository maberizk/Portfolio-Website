import ReactDOM from "react-dom";
import React, { useEffect, useRef } from "react";
import anime from 'animejs';
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedText from "./AnimatedText";
import oceanImg from "../../public/images/Ocean.jpg";



const Homepage = () => {

    return (
        <div>
            <div>
                <img src={oceanImg} className="backgroundImg" />
                <Navbar />
                <div className="animationContainer">
                    <AnimatedText text="Software Designer + Engineer" />

                </div>
            </div >
            <Footer />
        </div>
    )
}

export default Homepage;