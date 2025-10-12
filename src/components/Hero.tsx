import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

import "../styles/Hero.scss";


const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const el = heroRef.current;
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
    <section className="hero" ref={heroRef}>
      <main className="hero__frame">
        <hr />
        <section>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>

          <motion.div
            className="hero__content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          >
            <h2 className="hero__title">Hello! I'm Noura Altharwa</h2>
            <h1 className="hero__greeting">
              Bridging Business, Education, and Technology
            </h1>
          </motion.div>

          {/* CHATBOT AI INPUT */}
          <div className="chatbot-wrapper">
            <div className="chatbot--professional">
              <div className="chatbot__header">
                <Sparkles size={18} color="#fffaf6" />
                <span className="chatbot__title">AI Assistant</span>
              </div>
              <div className="ai-input">
                <textarea
                  className="chatbot__textarea"
                  rows={2}
                  placeholder="Type your message here..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="chatbot__send-btn">
                  Send
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>
        <hr />
      </main>
    </section>
  );
};

export default Hero;
