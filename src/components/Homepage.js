import ReactDOM from "react-dom";
import React, { useEffect, useRef } from "react";
import anime from 'animejs';
import Navbar from "./Navbar";
import Footer from "./Footer";

import oceanImg from "../../public/images/Ocean.jpg";



const Homepage = () => {
    const animationRef = useRef(null);
    useEffect(() => {

        let animation = document.querySelector(".animateText")

        // turning each letter into its own span
        animation.innerHTML = animation.textContent.replace(/(\S)/g, "<span class='letter'>$1</span>");
        {
            console.log(animation)
        }
        // vertical movement 
        animationRef.current = anime.timeline({ loop: true })
            .add({
                targets: '.animateText .letter',
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1600,
                delay: (el, i) => 300 + 30 * i
            }).add({
                targets: '.animateText .letter',
                translateY: [0, -100],
                opacity: [1, 0],
                easing: "easeInExpo",
                duration: 1400,
                delay: (el, i) => 100 + 30 * i
            });
        return () => {
            if (animationRef.current) {
                animationRef.current.pause();
                animationRef.current = null;
            }
        }
    }, [])



    // horizontal movement 

    //     anime.timeline({ loop: true })
    //         .add({
    //             targets: '.animateText .letter',
    //             translateX: [60, 0],
    //             translateZ: 0,
    //             opacity: [0, 1],
    //             easing: "easeOutExpo",
    //             duration: 1400,
    //             delay: (el, i) => 500 + 30 * i
    //         }).add({
    //             targets: '.animateText .letter',
    //             translateX: [0, -30],
    //             opacity: [1, 0],
    //             easing: "easeInExpo",
    //             duration: 1100,
    //             delay: (el, i) => 100 + 30 * i
    //         });
    // }, []);


    //     return (
    //         <div>
    //             <div>
    //                 <img src={oceanImg} className="backgroundImg" />
    //                 <Navbar />
    //                 <div className="animationContainer">
    //                     <div className="animateText">Software Engineer + Designer </div>
    //                 </div>
    //             </div>
    //             <Footer />
    //         </div>
    //     )
    // }

    return (
        <div>
            <div>
                <img src={oceanImg} className="backgroundImg" />
                <Navbar />
                <div className="animationContainer">
                    <div className="animateText">
                        <span>Software</span>
                        <span> Engineer</span>
                        <span>+</span>
                        <span>Designer</span>
                    </div>
                </div>
            </div >
            <Footer />
        </div>
    )
}

export default Homepage;