import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import Select from "react-select";
import type { StylesConfig } from "react-select";
import chroma from "chroma-js";

import "../styles/Hero.scss";

type OptionType = {
  value: string;
  label: string;
  color: string;
};

const colourOptions: OptionType[] = [
  { value: "general", label: "General", color: "#e2c79c" },
  { value: "business", label: "Business", color: "#e2c79c" },
  { value: "education", label: "Education", color: "#e2c79c" },
  { value: "technology", label: "Technology", color: "#e2c79c" },
];

const colourStyles: StylesConfig<OptionType, true> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "rgba(255, 225, 179, 0.23)",
    borderRadius: "8px",
    borderColor: "#af772e",
    color: "#e2c79c",
    boxShadow: "none",
    fontSize: "0.8rem",
    minWidth: "100px",
    cursor: "pointer",
   "&:hover": {
      borderColor: "#e2c79c",
    },
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "#b28c62",
    fontWeight: 500,
  }),
    dropdownIndicator: (styles) => ({
    ...styles,
    color: "#b28c62",
    "&:hover": { color: "#e2c79c" },
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: "#b28c62",
  }),
    menu: (styles) => ({
    ...styles,
    backgroundColor: "#080602", // darker dropdown
    border: "0.25px solid #e2c79c",
    borderRadius: "6px",
    marginTop: "1px",
  }),
option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isSelected
      ? "#d4a373"
      : isFocused
      ? "rgba(212, 163, 115, 0.15)"
      : "transparent",
    color: isSelected ? "#2a2118" : "#e2c79c",
    cursor: "pointer",
    fontSize: "0.8rem",
  }),
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
      borderRadius: "4px",
      padding: "2px 2px",
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: "#d4a373",
    ":hover": {
      backgroundColor: data.color,
      color: "#af772e",
    },
  }),
};

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);

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

  const handleSend = () => {
    console.log("Message:", inputValue);
    console.log("Categories:", selectedOptions);
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

                <Select
                  closeMenuOnSelect={false}
                  isMulti
                  options={colourOptions}
                  styles={colourStyles}
                  placeholder="Select topics..."
                  value={selectedOptions}
                  onChange={(selected) =>
                    setSelectedOptions(selected as OptionType[])
                  }
                />

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
