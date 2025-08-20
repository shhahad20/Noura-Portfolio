import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.scss";
import InfiniteScrollText from "./InfiniteScrollText";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero__background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <div className="hero__glow hero__glow--main"></div>
        <div className="hero__glow hero__glow--secondary"></div>
        <div className="hero__glow hero__glow--third"></div>

        <svg
          className="hero__bottom-svg-graphic"
          width="80"
          height="250"
          viewBox="0 0 80 250"
        >
          <path d="M 0 0 L 0 0 L 40 30 L 20 310 Z" fill="#D9D9D9" />
        </svg>
      </motion.div>

      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
      >
        <InfiniteScrollText />
        <h1 className="hero__greeting">Hello!</h1>
        <h2 className="hero__title">I'm Noura Altharwa</h2>
      </motion.div>
    </section>
  );
};

export default Hero;
