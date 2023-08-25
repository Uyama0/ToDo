"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const hamburgerTransition = {
  open: { x: 0 },
  closed: { x: -432 },
};
function header({ isOpen, setOpen }) {
  function log() {
    console.log("work");
  }

  return (
    <header className="relative">
      <nav className="w-full absolute justify-between flex p-3 text-white">
        <button onClick={() => setOpen((isOpen) => !isOpen)}>Button</button>
        <span>Uyama</span>
        <button>Theme</button>
      </nav>
      {/* <motion.div
        initial={{
          x: -432,
        }}
        animate={isOpen ? "open" : "closed"}
        variants={hamburgerTransition}
        transition={{
          duration: 0.6,
        }}
        className="absolute h-[calc(100vh-48px)] w-3/4 bg-slate-600"
      ></motion.div> */}
    </header>
  );
}

export default header;
