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
        <button
          className="md:hidden"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          Button
        </button>
        <span>Uyama</span>
        <button>Theme</button>
      </nav>
    </header>
  );
}

export default header;
