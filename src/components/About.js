import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import michelleNoBG from '../../public/images/michelleBW.png'

export default function About() {
    return (
        <div className="about">
            <Navbar />

            <h3 data-aos="fade-right" className="aboutHeader">Hi, I'm Michelle</h3>

            <div className="aboutContainer">
                <div data-aos="fade-right" className="flexAbout">
                    <div className="aboutText">
                        <p>I'm a front-end software engineer based in Los Angeles with a passion for design, structure and efficency. Transitioning from the physical world as an interior designer to the digital world, I am especially interested in creating responsive components that are functional while beautiful, interactive and fun for the user.
                        </p>
                        <p>When I'm not coding, you can find me thrifting, sewing, soaking up inspiration in nature and museums, or doing yoga. </p>
                    </div>
                </div>
                <div data-aos="fade-left" className="michelleImgContainer">
                    <img src={michelleNoBG} className="michelleImg" />
                </div>
            </div>
            <Footer />

        </div>
    )
}
