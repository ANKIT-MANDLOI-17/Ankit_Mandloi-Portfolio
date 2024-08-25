import React from "react";
import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/about.jpg";
import Resume from '../assets/AnkitMandloiResume.pdf'

import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center items-center">
            <img className="rounded-2xl" src={aboutImg} alt="AboutImg" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 "
        >
          <div className="flex justify-center lg:justify-start ">
            <div className="my-2 max-w-xl   ">
              <p className="py-6">{ABOUT_TEXT}</p>
              <a
                href={Resume}
                target="_blank"
               
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs lg:leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out lg:text-base"
              >
                Download Resume
              </a>

             
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
