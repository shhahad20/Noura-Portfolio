import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import { easeInOut } from "framer-motion";
import "../styles/Contact.scss";
import Footer from "./Footer";

// const containerVariants = {
// 	hidden: { opacity: 0, y: 60 },
// 	visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut } },
// };
// const itemVariants = {
// 	hidden: { opacity: 0, y: 40 },
// 	visible: (i: number) => ({
// 		opacity: 1,
// 		y: 0,
// 		transition: { delay: 0.2 + i * 0.15, duration: 0.7, ease: easeInOut },
// 	}),
// };

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = contactRef.current;
    if (!el) return;
    const handlePointerMove = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;
      const {
        top: t,
        left: l,
        width: w,
        height: h,
      } = el.getBoundingClientRect();
      el.style.setProperty("--posX", String(x - l - w / 2));
      el.style.setProperty("--posY", String(y - t - h / 2));
    };
    el.addEventListener("pointermove", handlePointerMove);
    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <section className="contact-section" ref={contactRef}>
      <main className="contact__frame">
        <motion.div
          className="contact__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
          <h1 className="contact__title">Want to make a difference? So do I</h1>
          <h2 className="contact__greeting">
            Let’s connect to share ideas, discuss partnerships, or collaborate
            on future projects in tech, education, or business development.
          </h2>

          <button className="contact__cta" aria-label="Get in touch">
            Get In Touch
          </button>
        </motion.div>
        <Footer />
      </main>
    </section>
  );
};

export default Contact;
