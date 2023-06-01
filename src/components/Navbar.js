import React from "react";
import Portfolio from "./Portfolio";
import Main from "./Main";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="nav">
            <div className="navLeft">
                <h1><Link to="/" className="navLinks">Michelle Aberizk</Link></h1>
            </div>
            <div className="navRight">
                <h1><Link to="/portfolio" className="navLinks" >Portfolio</Link></h1>
                <h1><Link to="/about" className="navLinks">About</Link></h1>
            </div>
        </nav >
    )
}

export default Navbar;