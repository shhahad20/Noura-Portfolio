import React from "react";
import { motion } from "framer-motion";
import "../styles/About.scss";

const About: React.FC = () => {
  return (
    <section className="about">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
      >
        <h1 >Hello!</h1>
        <h2 >I'm Noura Altharwa</h2>
      </motion.div>

    </section>
  );
};

export default About;
