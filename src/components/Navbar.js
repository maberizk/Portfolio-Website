import React from "react";

const Navbar = () => {

    return <nav className="nav">
        <div className="navLeft">
            <h1><a href="index.html" className="navLinks">Michelle Aberizk</a></h1>
        </div>
        <div className="navRight">
            <h1><a href="index.html" className="navLinks">Home</a></h1>
            <h1><a href="portfolio.html" className="navLinks">Portfolio</a></h1>
            <h1><a href="about.html" className="navLinks">About</a></h1>
        </div>
    </nav>
}

export default Navbar;