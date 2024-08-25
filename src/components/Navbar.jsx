import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import logo from "../assets/kevinRushLogo.png";

function Navbar() {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className='mx-2 w-10' src={logo} alt="logo" /> */}
        <h1 className="mx-2 w-10 text-4xl">AM</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">

      <a
          href="https://www.linkedin.com/in/ankit-mandloi-8203a9251/"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer"
        >
          
        <FaLinkedin />
        </a>
        <a
          href="https://github.com/ANKIT-MANDLOI-17"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/mandloi336"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer"
        >
          
        <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
