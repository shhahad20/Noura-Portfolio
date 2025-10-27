import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

import "../styles/Hero.scss";


const options = [
  { value: "general", label: "General" },
  { value: "business", label: "Business" },
  { value: "education", label: "Education" },
  { value: "technology", label: "Technology" },
];

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

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
 
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Select / deselect options
  const toggleSelect = (value: string) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
    setIsOpen(false); // closes dropdown when selecting an option
  };

  const handleSend = () => {
    console.log("Message:", inputValue);
    console.log("Selected Sections:", selected);
  };

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
              Bridging Business, Education & Technology
            </h1>
          </motion.div>

          {/* CHATBOT AI INPUT */}
          <div className="chatbot-wrapper">
            <div className="chatbot--professional">
              <div className="chatbot__header">
                <span className="chatbot__title">Quick Access Using AI</span>
                <Sparkles size={18} color="#af772e" />
              </div>
              <div className="ai-input">
                <textarea
                  className="chatbot__textarea"
                  rows={2}
                  placeholder="Type your message here..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />

{/* Custom Select */}
                <div className="custom-select" ref={dropdownRef}>
                  <button
                    className="select-btn"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {selected.length > 0
                      ? selected.map(
                          (val) => options.find((o) => o.value === val)?.label
                        ).join(", ")
                      : "Select Topics"}
                    <span className="arrow">{isOpen ? "▲" : "▼"}</span>
                  </button>

                  {isOpen && (
                    <ul className="dropdown-menu">
                      {options.map((opt) => (
                        <li
                          key={opt.value}
                          className={`option ${
                            selected.includes(opt.value) ? "selected" : ""
                          }`}
                          onClick={() => toggleSelect(opt.value)}
                        >
                          {opt.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <button className="chatbot__send-btn" onClick={handleSend}>
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
