import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, ChevronDown, WandSparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Select / deselect options
  const toggleSelect = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
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
            <h2 className="hero__title">{t("hero.title")}</h2>
            <h1 className="hero__greeting">
              {t("hero.subtitle")}
            </h1>
          </motion.div>

          {/* CHATBOT AI INPUT */}
          <motion.div
            className="chatbot-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          >
            <div className="chatbot--professional">
              <div className="chatbot__header">
                <span className="chatbot__title">Quick Access Using AI</span>
                <WandSparkles className="ai-icon" color="#af772e" />
              </div>
              <div className="ai-input">
                <textarea
                  className="chatbot__textarea"
                  rows={2}
                  placeholder={t("hero.placeholder")}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />

                {/* Custom Select */}
                <div className="custom-select" ref={dropdownRef}>
                  <button
                    className="select-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                  >
                    {selected.length > 0
                      ? selected
                          .map(
                            (val) => options.find((o) => o.value === val)?.label
                          )
                          .join(", ")
                      : t("hero.selectTopics")}
                    <ChevronDown className={`arrow ${isOpen ? "open" : ""}`} />
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
          </motion.div>
        </section>
        <hr />
      </main>
    </section>
  );
};

export default Hero;
