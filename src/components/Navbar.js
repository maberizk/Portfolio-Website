import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav data-aos="fade-down" className="navigation">
      <div className="navLeft">
        <h1>
          <Link to="/" className="link">
            HOME
          </Link>
        </h1>
      </div>

      {/* <div className={`navRight ${isOpen ? "active" : ""}`}>
        <h1>
          <Link to="/portfolio" id="link" className="link">
            Portfolio
          </Link>
        </h1>

        <h1>
          <Link to="/about" id="link" className="link">
            About
          </Link>
        </h1>
      </div>
      <a
        href="#"
        className={`toggle-button ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`bar ${isHomepage ? "" : "barWhite"}`}></span>
        <span className={`bar ${isHomepage ? "" : "barWhite"}`}></span>
        <span className={`bar ${isHomepage ? "" : "barWhite"}`}></span>
      </a> */}
    </nav>
  );
};

export default Navbar;
