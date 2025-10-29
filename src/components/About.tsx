import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/About.scss";

const About: React.FC = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="about" ref={ref}>
      <motion.div
        className="recent-projects__title-section"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="recent-projects__title">Where It All Began</h2>
      </motion.div>

      <div className="about-container">
        <div className="about-paragraph">
          <div className="absolute top-8 right-8 opacity-20"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            doloremque laudantium nihil reiciendis quia! Atque sapiente eveniet
            in harum doloribus sit ut hic. Numquam quo ab atque modi tempora
            nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            doloremque laudantium nihil reiciendis quia! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Omnis doloremque laudantium nihil
            reiciendis quia! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Omnis doloremque laudantium nihil reiciendis quia! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Omnis doloremque
            laudantium nihil reiciendis quia!
          </p>
        </div>

        <div className="content-section">
          <h2>What I’ve Been Working On</h2>
          <p>Professional Experience</p>
        </div>
      </div>
    </section>
  );
};

export default About;
