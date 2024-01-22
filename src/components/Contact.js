import React from "react";
export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact">
        <a
          href="https://www.linkedin.com/in/michelle-aberizk-99148624/"
          target="_blank"
          className="socialButton"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/maberizk"
          target="_blank"
          className="socialButton"
        >
          github
        </a>
        <a
          href="/MichelleAberizk_Resume.pdf"
          target="_blank"
          className="socialButton"
        >
          Resume
        </a>
      </div>
      <p id="email">Michelle.aberizk@gmail.com</p>
    </div>
  );
}
