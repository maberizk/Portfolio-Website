import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const isHomepage = location.pathname === "/";

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav data-aos="fade-down" className={isHomepage ? "nav" : "navWhite"}>
            <div className="navLeft">
                <h1><Link to="/"
                    className={`${isHomepage ? "link" : "linkWhite"}`}
                >Michelle Aberizk</Link></h1>
            </div>

            <div className={`navRight ${isOpen ? "active" : ""}`}>
                <h1>
                    <Link to="/portfolio" className={`${isHomepage ? "link" : "linkWhite"}`} >
                        Portfolio
                    </Link></h1>

                <h1>
                    <Link to="/about" className={`${isHomepage ? "link" : "linkWhite"}`}>
                        About</Link></h1>
            </div>
            <a href="#" className={`toggle-button ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>

                <span className={`bar ${isHomepage ? "" : "barWhite"}`}></span>
                <span className={`bar ${isHomepage ? "" : "barWhite"}`}></span>
                <span className={`bar ${isHomepage ? "" : "barWhite"}`}></span>
            </a>
        </nav >
    )
}

export default Navbar;


