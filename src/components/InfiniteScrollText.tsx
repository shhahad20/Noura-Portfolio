import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import '../styles/InfiniteScrollText.scss';

const InfiniteScrollText = () => {
  const texts = [
    "Business Development",
    "Team Leadership", 
    "Mobile Application Development",
    "Translation Services",
    "Educator",
    "Artist",
  ];
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="infinite-scroll-page" ref={ref}>
              <motion.h2
          className="core-competencies__title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Core Competencies
        </motion.h2>
      <div className="scroll-container">
        <div className="scroll-wrapper">
          <div className="scroll-content">
            {texts.map((text, index) => (
              <div key={index} className="scroll-item">
                {text}
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="scroll-content" aria-hidden="true">
            {texts.map((text, index) => (
              <div key={`duplicate-${index}`} className="scroll-item">
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollText;