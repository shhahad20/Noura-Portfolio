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
        <h2 className="about__title">Where It All Began</h2>
      </motion.div>

      <div className="about-container">
        <div className="about-paragraph">
          <div className="absolute top-8 right-8 opacity-20"></div>
          <p>
            Holds a Master’s degree in Executive Business Administration with
            First-Class Honors (Excellent). A part-time faculty member at the
            Saudi Electronic University. A graduate of the Apple Developer
            Academy. I have developed five applications in collaboration with my
            team, and I am currently managing two teams working on two different
            applications — one specializing in real estate technology and the
            other in food technology using artificial intelligence, which was
            selected as an innovative application.<br /><br />I also managed a home-based
            bakery project that served more than 10 cafés in Hail. I worked as
            an English language instructor at Elaf Institute for diploma
            students and authored an English learning book that is still in use
            at the institution.<br /><br />I represented the Apple Academy at the 2023 LEAP
            Conference and participated in the 2024 LEAP Conference as one of
            the exhibitors for the LAN application project in the field of real
            estate technology.
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
