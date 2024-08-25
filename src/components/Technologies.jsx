import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiRedux, SiReduxsaga } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiCplusplus } from "react-icons/si";

import { animate, motion } from "framer-motion";

const iconVarient = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4 "
      >
        <motion.div
          variants={iconVarient(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl  border-4 border-neutral-800 p-4"
        >
          <DiJavascript className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVarient(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl  border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVarient(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl  border-4 border-neutral-800 p-4"
        >
          <SiRedux className="text-7xl text-purple-500" />
        </motion.div>

        <motion.div
          variants={iconVarient(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl  border-4 border-neutral-800 p-4"
        >
          <FaGitAlt className="text-7xl text-orange-600" />
        </motion.div>

        <motion.div
          variants={iconVarient(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl  border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVarient(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl  border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconVarient(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl  border-4 border-neutral-800 p-4"
        >
          <IoLogoFirebase className="text-7xl text-yellow-400 " />
        </motion.div>
        <motion.div
          variants={iconVarient(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl  border-4 border-neutral-800 p-4"
        >
          <SiCplusplus className="text-7xl text-blue-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
