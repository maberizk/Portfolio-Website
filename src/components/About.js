import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import michelleNoBG from '../../public/images/michelleBW.png'

export default function About() {
    return (
        <div className="about">
            <Navbar />

            <h3 className="hiText">Hi, I'm Michelle</h3>

            <div className="aboutContainer">
                <div className="flexAbout">
                    <div className="aboutText">
                        <p>From shaping spaces to crafting code, I am a passionate software developer with a background in interior design. As an interior designer, I honed my problem-solving skills, attention to detail and user-centric approach. However, I increasingly realized that the design challenges I encountered could be addressed in a more dynamic and scalable way through technology. I thrive on the ability to create digital experiences that not only engage users but also enhance their lives in meaningful ways. As I continue growing as a developer, I am continuously inspired by the opportunity to shape virtual environments, just as I once shaped physical spaces.</p>
                        {/* <p>I am a web developer and designer based in Los Angeles. </p>
                        <p>After years of working in the interior design field, I decided to take a big leap into the world of tech.
                        </p> */}
                        {/* <p>When not working hard, I pride myself in finding a healthy worklife
                            balance.</p> */}
                        {/* <p>In my free time you can find me hiking, thrifting, sewing, playing with my kitties, finding
                            inspriaton
                            in art and architecture, or connecting with friends.</p> */}
                    </div>
                    <div className="socialIcons">
                        <a href="https://www.linkedin.com/in/michelle-aberizk-99148624/" className="icon"><i
                            className="fa fa-linkedin-square" style={{ fontSize: "32px" }}></i></a>
                        <a href="https://www.pinterest.com/meesh129/" className="icon"><i className="fa fa-pinterest"
                            style={{ fontSize: "32px" }}></i></a>
                    </div>
                </div>
                <div className="michelleImgContainer">
                    <img src={michelleNoBG} className="michelleImg" />
                </div>
            </div>
            <Footer />

        </div>
    )
}
