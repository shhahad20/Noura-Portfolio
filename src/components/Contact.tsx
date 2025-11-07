import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import { easeInOut } from "framer-motion";
import "../styles/Contact.scss";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();

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
    <section
      className={`contact-section ${
        i18n.language === "ar" ? "contact-section--ar" : ""
      }`}
      ref={contactRef}
      id="contact"
    >
      <main className="contact__frame">
        <motion.div
          className="contact__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
          <h1 className="contact__title">{t("contact.title")}</h1>
          <h2 className="contact__greeting">{t("contact.subtitle")}</h2>

          <button className="contact__cta" aria-label="Get in touch">
            {t("contact.btnText")}
          </button>
        </motion.div>
        <Footer />
      </main>
    </section>
  );
};

export default Contact;
