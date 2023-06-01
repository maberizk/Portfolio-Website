import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
    const location = useLocation();
    const isHomepage = location.pathname === "/";

    return (
        <div className={isHomepage ? "footer" : "footerColor"}>
            <p>michelle.aberizk@gmail.com</p>
            <p>619.884.8142</p>
        </div>
    )
}

