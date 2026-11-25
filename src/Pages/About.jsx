import "./About.css";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { language } = useLanguage();

  const text = {
    en: {
      eyebrow: "A LITTLE ABOUT ME",
      title: "ABOUT",
      intro: "Thinking outside the box",
      journeyLabel: "MY JOURNEY",
      journeyStart: "FROM ",
      journeyGradient: "CURIOSITY",
      journeyEnd: " TO CREATION",
      journeyIntro:
        "My creative journey began in London, through music, guitar and my first experiences on stage. In 2010, I moved into live entertainment and lighting. For nearly 15 years, I worked across a variety of artistic productions, developing a visual sensibility, strong technical skills and a passion for creativity.",
      journey:
        "After an intensive web design and development training programme, I quickly launched my freelance activity. My first project came through word of mouth and confirmed my belief that every project deserves a personal approach, far from standard templates. Since then, I've been creating digital experiences combining creativity, visual identity and functionality.",
      servicesLabel: "WHAT I DO",
      servicesStart: "DESIGN ",
      servicesGradient: "DEVELOP",
      servicesEnd: " CREATE",
      designTitle: "WEB DESIGN",
      design:
        "Visual identity, art direction, interface design and creation of custom graphic mockups tailored to unique creative projects.",
      developmentTitle: "WEB DEVELOPMENT",
      development:
        "Modern, responsive and efficient websites built with React, JavaScript and Vue.js, combining clean design with smooth and intuitive user experiences.",
      customTitle: "CUSTOM PROJECTS",
      custom:
        "Showcase websites, portfolios, blogs and online stores tailored to each project.",
      maintenanceTitle: "SUPPORT & MAINTENANCE",
      maintenance:
        "Website maintenance, updates and ongoing improvements to keep your website running smoothly and evolving over time.",
      approachLabel: "MY APPROACH",
      approachStart: "LESS TEMPLATE MORE ",
      approachGradient: "PERSONALITY",
      approachFirst:
        "I value genuine collaborations with independent professionals, artists, associations and entrepreneurs.",

      approachSecond:
        "My goal is to create meaningful websites that stand out and truly reflect the people behind them.",
    },

    fr: {
      eyebrow: "QUELQUES MOTS SUR MOI",
      title: "À PROPOS",
      intro: "Créer, tester, recommencer",
      journeyLabel: "MON PARCOURS",
      journeyStart: "DE LA ",
      journeyGradient: "CURIOSITÉ",
      journeyEnd: " À LA CRÉATION",
      journeyIntro:
        "Mon parcours créatif commence à Londres, entre musique et expériences scéniques. En 2010, je me tourne vers le spectacle vivant et la régie lumière. Pendant près de 15 ans, je travaille dans des univers artistiques variés, où je développe une sensibilité visuelle et le goût de la création.",
      journey:
        "Après une formation intensive en web design et développement, j'ai rapidement lancé mon activité freelance. Mon premier projet est arrivé grâce au bouche-à-oreille et a confirmé ma conviction : chaque projet mérite une approche personnalisée, loin des modèles standardisés. Depuis, je crée des expériences web qui associent créativité, identité visuelle et efficacité.",
      servicesLabel: "MES PRESTATIONS",
      servicesStart: "CRÉER ",
      servicesGradient: "DÉVELOPPER",
      servicesEnd: " CONCEVOIR",
      designTitle: "WEB DESIGN",
      design:
        "Identité visuelle, direction artistique, conception d’interfaces et création de maquettes graphiques personnalisées pour des projets uniques.",
      developmentTitle: "DÉVELOPPEMENT WEB",
      development:
        "Des sites web modernes, responsives et performants, développés avec React, JavaScript et Vue.js, alliant design soigné et expériences utilisateur fluides et intuitives.",
      customTitle: "PROJETS SUR MESURE",
      custom:
        "Sites vitrines, portfolios, blogs et boutiques en ligne adaptés à chaque projet.",
      maintenanceTitle: "SUIVI & MAINTENANCE",
      maintenance:
        "Maintenance, mises à jour et améliorations pour assurer le bon fonctionnement de votre site et le faire évoluer dans le temps.",
      approachLabel: "MA VISION",
      approachStart: "MOINS DE MODÈLES PLUS DE ",
      approachGradient: "PERSONNALITÉ",
      approachFirst:
        "Je privilégie les collaborations humaines avec des indépendants, artistes, associations et entrepreneurs.",

      approachSecond:
        "Je crée des sites qui ont du sens, qui se démarquent et qui ressemblent vraiment à ceux qui les utilisent.",
    },
  };

  const t = text[language] || text.en;

  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        {/* ABOUT HERO */}
        <div className="about-hero">
          {/* PHOTO */}
          <div className="about-photo">
            <img src="/nelson.webp" alt="Looking out over the mountains" />
          </div>

          {/* TITLE */}
          <header className="about-header">
            <p className="about-eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
            <p className="about-intro">{t.intro}</p>
          </header>
        </div>

        {/* ABOUT CONTENT */}
        <div className="about-content">
          {/* MY JOURNEY */}
          <div className="journey-layout">
            <article className="about-block">
              <p className="about-label">{t.journeyLabel}</p>
              <h3>
                {t.journeyStart}
                <span className="about-gradient">{t.journeyGradient}</span>
                {t.journeyEnd}
              </h3>
              <p>{t.journeyIntro}</p>
              <p className="journey-second">{t.journey}</p>
            </article>

            <div className="journey-photo">
              <img src="/nels.webp" alt="Nelson working backstage" />
            </div>
          </div>

          {/* WHAT I DO */}
          <div className="services-layout">
            <article className="about-block-2">
              <p className="about-label">{t.servicesLabel}</p>
              <h3>
                {t.servicesStart}
                <span className="about-gradient">{t.servicesGradient}</span>
                {t.servicesEnd}
              </h3>

              <div className="about-services">
                <div>
                  <h4>{t.designTitle}</h4>
                  <p>{t.design}</p>
                </div>

                <div>
                  <h4>{t.developmentTitle}</h4>
                  <p>{t.development}</p>
                </div>

                <div>
                  <h4>{t.customTitle}</h4>
                  <p>{t.custom}</p>
                </div>

                <div>
                  <h4>{t.maintenanceTitle}</h4>
                  <p>{t.maintenance}</p>
                </div>
              </div>
            </article>

            <div className="services-photo">
              <img src="/crea.webp" alt="Web design and creative workspace" />
            </div>
          </div>

          {/* MY APPROACH */}
          <article className="about-block">
            <p className="about-label">{t.approachLabel}</p>
            <h3>
              {t.approachStart}
              <span className="about-gradient">{t.approachGradient}</span>
            </h3>
            <p>{t.approachFirst}</p>
            <p>{t.approachSecond}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
