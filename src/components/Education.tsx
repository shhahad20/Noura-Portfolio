import React from "react";
import { Calendar, MapPin } from "lucide-react";
import "../styles/Education.scss";
import { useTranslation } from "react-i18next";

const Education: React.FC = () => {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  const { t } = useTranslation();

  const educationList = [
    {
      id: 1,
      university: t("education.master.university"),
      period: t("education.master.period"),
      degree: t("education.master.degree"),
      gpa: t("education.master.gpa"),
    },
    {
      id: 2,
      university: t("education.diploma.university"),
      period: t("education.diploma.period"),
      degree: t("education.diploma.degree"),
      gpa: t("education.diploma.gpa"),
    },
    {
      id: 3,
      university: t("education.bachelor.university"),
      period: t("education.bachelor.period"),
      degree: t("education.bachelor.degree"),
      gpa: t("education.bachelor.gpa"),
    },
  ];

  return (
    <div className="education-wrapper">
      <div className="education-inner">
        <div className="education-hero">
          <h1 className="hero-title">{t("education.title")}</h1>
          <p className="hero-subtitle">{t("education.subtitle")}</p>
        </div>

        <div className="education-grid">
          {educationList.map((item) => (
            <div
              key={item.id}
              className={`education-item ${
                hoveredCard === item.id ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Header section */}
              <div className="item-header">
                <h2 className="degree-name">{item.degree}</h2>
              </div>

              {/* University + Period + GPA */}
              <div className="institution-block">
                {/* <span className="map-icon"><MapPin size={18} /></span> */}
                <h3 className="institution-title"> <MapPin size={18} /> {item.university}</h3>

                {item.gpa && (
                  <div className="gpa-badge">
                    <span>{item.gpa}</span>
                  </div>
                )}

                <div className="meta-row">
                  <span className="meta-detail">
                    <Calendar size={18} />
                    {item.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
