import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { LuExternalLink } from "react-icons/lu";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                height={180}
                width={250}
                className="mb-6 rounded transition-transform duration-300 transform hover:scale-125 peer"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 "
            >
              <h6 className="mb-2 font-semibold flex justify-between ">
                {project.title}{" "}
                <div className="font-light lg:mr-4 ">
                  <a target="_blank" href={project.code}>
                    [Code]
                  </a>{" "}
                  <a target="_blank" href={project.demo}>
                    [Demo]
                  </a>
                </div>
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 px-2 py-1 font-medium bg-neutral-900 text-sm text-purple-900"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
