import React, { useState } from "react";
import { Link } from "react-router-dom";

const TOTAL_PROJECTS = 7;

const Navbar = ({ currentProjectId }) => {
  const nextProjectId = currentProjectId + 1;

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
      {currentProjectId < TOTAL_PROJECTS && (
        <div className="navRight">
          <h1>
            <Link to={`/portfolio/${nextProjectId}`} className="link">
              NEXT PROJECT
              <span className={`material-symbols-outlined`}>
                arrow_forward_ios
              </span>
            </Link>
          </h1>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
