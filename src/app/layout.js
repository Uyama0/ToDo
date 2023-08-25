"use client";

import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const metadata = {
  title: "ToDo v2",
  description: "ToDo app v2",
};

const hamburgerTransition = {
  open: { x: 0 },
  closed: { x: "60%" },
};

const navTransition = {
  open: { x: -300 },
  closed: { x: -74 },
};

export default function RootLayout({ children }) {
  const [isOpen, setOpen] = useState(true);

  return (
    <html lang="en">
      <body className="flex justify-center">
        <motion.main
          animate={isOpen ? "open" : "closed"}
          variants={hamburgerTransition}
          transition={{
            duration: 0.6,
          }}
          className="max-w-xl w-full h-screen"
        >
          <Header isOpen={isOpen} setOpen={setOpen} />
          <main>{children}</main>
        </motion.main>
        <AnimatePresence>
          <motion.div
            variants={navTransition}
            transition={{
              duration: 0.6,
            }}
            initial={{
              x: -300,
            }}
            animate={isOpen ? "open" : "closed"}
            className="absolute md:hidden h-screen w-[60%] bg-white"
          >
            <h1>
              There could be a menu, but im bit bored with this project ^-^
            </h1>
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
