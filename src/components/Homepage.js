import ReactDOM from "react-dom";
import React, { useEffect, useRef } from "react";
import anime from 'animejs';
import Navbar from "./Navbar";
import Footer from "./Footer";

import oceanImg from "../../public/images/Ocean.jpg";


const Homepage = () => {


    useEffect(() => {

        let div = document.querySelector(".animateText")
        // turning each letter into its own span
        div.innerHTML = div.textContent.replace(/(\S)/g, "<span class='letter' style='display: inline-block'>$1</span>");

        anime.timeline({ loop: true })
            .add({
                targets: '.animateText .letter',
                translateX: [60, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1400,
                delay: (el, i) => 500 + 30 * i
            }).add({
                targets: '.animateText .letter',
                translateX: [0, -30],
                opacity: [1, 0],
                easing: "easeInExpo",
                duration: 1100,
                delay: (el, i) => 100 + 30 * i
            });

    }, []);

    return (
        <div>
            <div>
                <img src={oceanImg} className="backgroundImg" />
                <Navbar />
                <div className="animationContainer">
                    <div className="animateText">Software Development and Design</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Homepage;