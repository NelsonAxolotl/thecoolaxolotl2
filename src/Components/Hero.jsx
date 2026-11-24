import "./Hero.css";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { language } = useLanguage();

  const text = {
    en: {
      subtitle: "INDEPENDENT WEB DESIGN & DEVELOPMENT",
      button: "EXPLORE MY WORK",
      location: "BASED IN FRANCE · WORKING WORLDWIDE",
      scroll: "SCROLL TO EXPLORE ↓",
    },
    fr: {
      subtitle: "WEB DESIGN & DÉVELOPPEMENT INDÉPENDANT",
      button: "DÉCOUVRIR MES PROJETS",
      location: "BASÉ EN FRANCE · PROJETS À L'INTERNATIONAL",
      scroll: "DÉFILER POUR EXPLORER ↓",
    },
  };

  const current = text[language] || text.en;

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">{current.subtitle}</p>

        <div className="hero-title-wrapper">
          <h1 className="hero-title">
            <span>THE COOL</span>
            <span>AXOLOTL</span>
          </h1>

          <span className="registered">®</span>
        </div>

        <a href="#work" className="hero-button">
          {current.button} <span>↗</span>
        </a>
      </div>

      {/* BOTTOM INFORMATION */}
      <div className="hero-bottom">
        <span className="hero-location">
          <span className="status-dot"></span>
          {current.location}
        </span>

        <span>{current.scroll}</span>
      </div>
    </section>
  );
}
