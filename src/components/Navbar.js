import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav data-aos="fade-down" className="navigation">
      <div className="navLeft">
        <h1>
          <Link to="/" className="link">
            <span className={`material-symbols-outlined`}>arrow_back_ios</span>
            HOME
          </Link>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
