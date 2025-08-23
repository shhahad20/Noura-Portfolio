import React from "react";
import { motion, easeInOut } from "framer-motion";
import "../styles/Contact2.scss";

const glowVariants = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.7, 1, 0.7],
    x: ["-10%", "10%", "-10%"],
    y: ["-8%", "8%", "-8%"],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
};

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#fffaf6" />
        <path
          d="M10.5 13.5h3v8h-3v-8zm1.5-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4 4h2.8v1.1h.04c.39-.74 1.34-1.51 2.76-1.51 2.95 0 3.5 1.94 3.5 4.47v4.94h-3v-4.38c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.13-1.67 2.3v4.46h-3v-8z"
          fill="#eec8af"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#fffaf6" />
        <path
          d="M16 11.5A4.5 4.5 0 1016 20.5 4.5 4.5 0 0016 11.5zm0 7.5a3 3 0 110-6 3 3 0 010 6zm5.25-7.75a1 1 0 11-2 0 1 1 0 012 0zm2.75 1.02c-.06-1.32-.36-2.48-1.32-3.44-.96-.96-2.12-1.26-3.44-1.32-1.36-.08-5.44-.08-6.8 0-1.32.06-2.48.36-3.44 1.32-.96.96-1.26 2.12-1.32 3.44-.08 1.36-.08 5.44 0 6.8.06 1.32.36 2.48 1.32 3.44.96.96 2.12 1.26 3.44 1.32 1.36.08 5.44.08 6.8 0 1.32-.06 2.48-.36 3.44-1.32.96-.96 1.26-2.12 1.32-3.44.08-1.36.08-5.44 0-6.8zm-2.18 8.26a3.7 3.7 0 01-2.1 2.1c-.58.23-1.17.36-2.22.39-1.36.08-5.44.08-6.8 0-1.05-.03-1.64-.16-2.22-.39a3.7 3.7 0 01-2.1-2.1c-.23-.58-.36-1.17-.39-2.22-.08-1.36-.08-5.44 0-6.8.03-1.05.16-1.64.39-2.22a3.7 3.7 0 012.1-2.1c.58-.23 1.17-.36 2.22-.39 1.36-.08 5.44-.08 6.8 0 1.05.03 1.64.16 2.22.39a3.7 3.7 0 012.1 2.1c.23.58.36 1.17.39 2.22.08 1.36.08 5.44 0 6.8-.03 1.05-.16 1.64-.39 2.22z"
          fill="#eec8af"
        />
      </svg>
    ),
  },
  {
    name: "X",
    url: "https://x.com/",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#fffaf6" />
        <path
          d="M20.7 11h2.3l-5.1 5.8 6 7.2h-4.7l-3.7-4.5-4.2 4.5H9.1l5.4-5.9-5.7-7.1h4.8l3.3 4.1 3.8-4.1zm-.8 11.2h1.3l-8.2-10.2h-1.3l8.2 10.2z"
          fill="#eec8af"
        />
      </svg>
    ),
  },
];

const Contact2: React.FC = () => {
  return (
    <div className="contact2-outer">
      <h2 className="contact2-title">Let's Connect</h2>

      <motion.div
        className="contact2-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <motion.div
          className="contact2-glow"
          variants={glowVariants}
          animate="animate"
        />
        <div className="contact2-content">
          <motion.button
            className="contact2-btn"
            whileHover={{
              scale: 1.07,
              background: "linear-gradient(90deg,#eec8af,#fffaf6)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Talk
          </motion.button>
          <div className="contact2-socials">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="contact2-social"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact2;
