"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const hamburgerTransition = {
  open: { x: 0 },
  closed: { x: -432 },
};

function HamburgerNav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={hamburgerTransition}
      transition={{
        duration: 0.6,
      }}
      className="relative h-[calc(100vh-48px)] w-3/4 bg-slate-600"
    ></motion.div>
  );
}

export default HamburgerNav;
