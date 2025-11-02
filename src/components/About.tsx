import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/About.scss";

const About: React.FC = () => {
  const aboutRef = useRef(null);
  const h2Ref = useRef(null);
  const pRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const h2InView = useInView(h2Ref, { once: true, margin: "-100px" });
  const pInView = useInView(pRef, { once: true, margin: "-50px" });

  return (
    <section className="about" ref={aboutRef}>
      {/* Title motion */}
      <motion.div
        className="recent-projects__title-section"
        initial={{ opacity: 0, y: 60 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="about__title">Where It All Began</h2>
      </motion.div>

      {/* About container motion */}
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
      >
        <div className="about-paragraph">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          >
            Holds a Master’s degree in Executive Business Administration with
            First-Class Honors (Excellent). A part-time faculty member at the
            Saudi Electronic University. A graduate of the Apple Developer
            Academy. I have developed five applications in collaboration with my
            team, and I am currently managing two teams working on two different
            applications — one specializing in real estate technology and the
            other in food technology using artificial intelligence, which was
            selected as an innovative application.
            <br />
            <br />
            I also managed a home-based bakery project that served more than 10
            cafés in Hail. I worked as an English language instructor at Elaf
            Institute for diploma students and authored an English learning book
            that is still in use at the institution.
            <br />
            <br />
            I represented the Apple Academy at the 2023 LEAP Conference and
            participated in the 2024 LEAP Conference as one of the exhibitors
            for the LAN application project in the field of real estate
            technology.
          </motion.p>
        </div>

        {/* Content section */}
        <div className="content-section">
          <motion.h2
            ref={h2Ref}
            initial={{ opacity: 0, y: 30 }}
            animate={h2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            What I’ve Been Working On
          </motion.h2>

          <motion.p
            ref={pRef}
            initial={{ opacity: 0, y: 30 }}
            animate={pInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            Professional Experience
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
