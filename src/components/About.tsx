import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/About.scss";

const About: React.FC = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const experiences = [
    {
      company: "Saudi Electronic University",
      period: "2024 - Present",
      position: "Part-time Faculty Member",
      details: {
        type: "responsibilities",
        items: [
          "Teaching Executive Business Administration diploma courses, mentoring students in business concepts and practical applications.",
        ],
      },
    },
    {
      company: "ELAF Institute",
      period: "2019-2021",
      position: "English Language Instructor",
      details: {
        type: "achievements",
        items: [
          "Taught 6 diploma-level classes",
          "Developed comprehensive English language curriculum",
          "Served over 100 students monthly",
          "Authored educational textbook for ESL learners",
        ],
      },
    },
    {
      company: "Freelance Translation Services",
      period: "2016-2018",
      position: "Translator",
      details: {
        type: "specialization",
        items: [
          "Collaborated with Athra platform on Twitter for article translation covering diverse topics including social commentary and contemporary issues.",
        ],
      },
    },
    {
      company: '"Brown" Home Bakery',
      period: "2020 - Present",
      position: "Founder & Manager",
      details: {
        type: "achievements",
        items: [
          "Successfully established and managed a home bakery serving over 12 coffee shops in Hail and surrounding areas, demonstrating entrepreneurial skills and business acumen.",
        ],
      },
    },
  ];

  return (
    <section className="about" ref={ref}>
      <motion.div
        className="recent-projects__title-section"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="recent-projects__title">Where It All Began</h2>
        {/* <p className="recent-projects__subtitle">
          Crafting digital experiences that make a difference
        </p> */}
      </motion.div>

      <div className="about-container">
        <div className="experience-keywords">
          <div className="experience-headers">
            <h1>What I’ve Been Working On</h1>
            <p>Professional Experience</p>
          </div>
          <ul className="experience-list">
            {experiences.map((exp, idx) => (
              <li className="experience-item" key={`${exp.company}-${idx}`}>
                <header className="experience-item__header">
                  <h3 className="experience-company">{exp.company}</h3>
                  <span className="experience-period">{exp.period}</span>
                </header>
                <div className="experience-position">{exp.position}</div>

                {/* {exp.details && exp.details.items && (
                  <section className="experience-details">
                    <strong className="details-type">{exp.details.type}</strong>
                    <ul className="details-list">
                      {exp.details.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>
                )} */}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-paragraph">
          <div className="absolute top-8 right-8 opacity-20">
            <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
              <path
                d="M30 0L32 28L30 60M0 30L28 32L60 30M8 8L28 28L52 52M52 8L32 28L8 52"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          <h1>My Journey</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            doloremque laudantium nihil reiciendis quia! Atque sapiente eveniet
            in harum doloribus sit ut hic. Numquam quo ab atque modi tempora
            nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            doloremque laudantium nihil reiciendis quia! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Omnis doloremque laudantium nihil
            reiciendis quia! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Omnis doloremque laudantium nihil reiciendis quia! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Omnis doloremque
            laudantium nihil reiciendis quia!
          </p>
        </div>
      </div>
                <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stop-color="#fff" stop-opacity="1" />
                <stop offset="50%" stop-color="#ff4f87" stop-opacity="0.6" />
                <stop offset="100%" stop-color="#2b001f" stop-opacity="0" />
              </radialGradient>
              <linearGradient
                id="pageGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stop-color="#ffb6c1" />
                <stop offset="100%" stop-color="#ff4f87" />
              </linearGradient>
            </defs>

            <rect width="100%" height="100%" fill="url(#glow)" />

            <path
              d="M100,300 C150,250 450,250 500,300 Q300,350 100,300 Z"
              fill="url(#pageGradient)"
              stroke="#fff"
              stroke-width="2"
              opacity="0.8"
            />

            <path
              d="M300,250 Q320,180 400,200 Q420,260 380,280 Q340,290 300,250 Z"
              fill="url(#pageGradient)"
              stroke="#fff"
              stroke-width="1.5"
              opacity="0.9"
            />

            <path
              d="M320,180 Q360,190 400,200"
              stroke="#ffffff"
              stroke-width="1"
              opacity="0.5"
              fill="none"
            />

            <path
              d="M300,250 Q340,290 380,280"
              stroke="#000"
              stroke-width="2"
              opacity="0.2"
              fill="none"
            />
          </svg>
    </section>
  );
};

export default About;
