import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Navbar.scss";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar__container">
        <button
          className={`navbar__toggle${open ? " navbar__toggle--open" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="navbar__bar"></span>
          <span className="navbar__bar"></span>
          <span className="navbar__bar"></span>
        </button>
        <ul className={`navbar__links${open ? " navbar__links--open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
