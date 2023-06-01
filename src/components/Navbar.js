import React from "react";
import Portfolio from "./Portfolio";
import Main from "./Main";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const isHomepage = location.pathname === "/";

    return (
        <nav className={isHomepage ? "nav" : "navWhite"}>
            <div className="navLeft">
                <h1><Link to="/"
                    className={`${isHomepage ? "link" : "linkWhite"}`}
                >Michelle Aberizk</Link></h1>
            </div>
            <div className="navRight">
                <h1 ><Link to="/portfolio" className={`${isHomepage ? "link" : "linkWhite"}`} >Portfolio</Link></h1>
                <h1><Link to="/about" className={`${isHomepage ? "link" : "linkWhite"}`}>About</Link></h1>
            </div>
        </nav >
    )
}

export default Navbar;