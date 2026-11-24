import "./Work.css";
import { useLanguage } from "../LanguageContext";

const projects = [
  {
    year: "2026",
    title: "COMPAGNIE OSAER",
    category: {
      en: "CONTEMPORARY DANCE COMPAGNY",
      fr: "COMPAGNIE DE DANSE CONTEMPORAINE",
    },
    className: "project-osaer",
    image: "/os.png",
    url: "https://www.cieosaer.com/",
    description: {
      en: "From visual identity to development, an immersive website designed to showcase the Osaer company's choreographic creations and its dance awareness initiatives for young audiences.",
      fr: "De l’identité visuelle au développement, un site immersif conçu pour mettre en lumière les créations chorégraphiques de la compagnie Osaer et ses actions de sensibilisation à la danse auprès des jeunes publics.",
    },
    services: {
      en: "WEB DESIGN · CREATIVE · DEVELOPMENT",
      fr: "WEB DESIGN · CRÉATION · DÉVELOPPEMENT",
    },
    heading: {
      en: "Making Room for Dance",
      fr: "Faire place à la danse",
    },
    layout: "featured",
  },
  {
    year: "2025",
    title: "COMPAGNIE POLY R",
    category: {
      en: "OPERA COMPAGNY",
      fr: "COMPAGNIE LYRIQUE",
    },
    className: "project-polyr",
    image: "/polyr2.png",
    url: "https://www.compagniepolyr.fr/",
    description: {
      en: "A playful website that reimagines the codes of opera, making it more accessible to all and presenting its productions in a new light.",
      fr: "Un site ludique qui revisite les codes de l'opéra lyrique pour le rendre accessible à tous et faire découvrir ses spectacles sous un nouveau jour.",
    },
    services: {
      en: "WEB DESIGN · CREATIVE · DEVELOPMENT",
      fr: "WEB DESIGN · CRÉATION · DÉVELOPPEMENT",
    },
    heading: {
      fr: "Un univers lyrique décalé",
      en: "An Unconventional Opera World",
    },
    layout: "reverse",
  },
  {
    year: "2024",
    title: "EMMANUELLE FERDYAN",
    category: {
      en: "ARTISTE PORTFOLIO",
      fr: "PORTFOLIO D'ARTISTE",
    },
    className: "project-ferdyan",
    image: "/fer.png",
    url: "https://www.emmanuelleferdyan.com/",
    description: {
      en: "A refined portfolio showcasing Emmanuelle Ferdyan's work, artistic sensibility and distinctive creative universe.",
      fr: "Un portfolio épuré qui met en valeur les œuvres, la sensibilité artistique et l'univers singulier d'Emmanuelle Ferdyan.",
    },
    services: {
      en: "WEB DESIGN · CREATIVE · DEVELOPMENT",
      fr: "WEB DESIGN · CRÉATION · DÉVELOPPEMENT",
    },
    heading: {
      en: "A perspective on art",
      fr: "Un regard sur l'art",
    },
    layout: "featured",
  },
];

const translations = {
  en: {
    selected: "SELECTED",
    work: "WORK",
    intro:
      "A collection of digital experiences, creative ideas and things made with purpose",
    selectedProjects: "SELECTED PROJECTS",
    visit: "VISIT WEBSITE",
    more: "MORE PROJECTS COMING SOON",
    otherProjects: "OTHER PROJECTS",
    otherProjectsIntro:
      "A selection of web design projects created as part of personal practice and reproduction exercises. Inspired by existing websites and concepts, these projects explore different layouts, visual approaches and web development techniques.",
    otherProjectsDisclaimer:
      "These are personal projects created for practice and experimentation.",
  },
  fr: {
    selected: "DIVERS",
    work: "PROJETS",
    intro:
      "Une collection d'expériences digitales, d'idées créatives et de projets pensés avec intention.",
    selectedProjects: "PROJETS SÉLECTIONNÉS",
    visit: "VOIR LE SITE",
    more: "D'AUTRES PROJETS À VENIR",
    otherProjects: "AUTRES PROJETS",
    otherProjectsIntro:
      "Une sélection de projets réalisés dans le cadre d'exercices de reproduction et d'exploration du design web. Inspirés de sites et de concepts existants, ces projets permettent d'explorer différentes mises en page, approches graphiques et techniques d'intégration.",
    otherProjectsDisclaimer:
      "Il s'agit de projets personnels réalisés à des fins de pratique et d'expérimentation.",
  },
};

export default function Work() {
  const { language } = useLanguage();
  const text = translations[language] || translations.en;

  return (
    <section className="work-section" id="work">
      {/* WORK HEADER */}

      <div className="work-header">
        <h2 className="work-title">
          {text.selected} <span>{text.work}</span>
        </h2>

        <p className="work-description">{text.intro}</p>
      </div>

      {/* PROJECT GRID */}

      <div className="work-grid">
        {projects.map((project) => (
          <article
            className={`project-card project-card-${project.layout}`}
            key={project.title}
          >
            <div
              className={`project-link ${
                project.layout === "featured"
                  ? "project-link-featured"
                  : project.layout === "reverse"
                    ? "project-link-reverse"
                    : ""
              }`}
            >
              {/* PROJECT MAIN */}

              <div className="project-main">
                <div className="project-info">
                  <div className="work-eyebrow">
                    <span className="work-dot"></span>
                    {text.selectedProjects} — {project.year}
                  </div>

                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.category[language] || project.category.en}</p>
                  </div>
                </div>

                {/* PROJECT VISUAL */}

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-visual-link"
                  aria-label={`Visit ${project.title} website`}
                >
                  <div className={`project-visual ${project.className}`}>
                    {project.image && (
                      <img
                        src={project.image}
                        alt={`${project.title} website`}
                        className="project-image"
                      />
                    )}
                  </div>
                </a>
              </div>

              {/* PROJECT DESCRIPTION */}

              <div className="project-description">
                <h3>{project.heading[language] || project.heading.en}</h3>

                <p>{project.description[language] || project.description.en}</p>

                <div className="project-services">
                  {project.services[language] || project.services.en}
                </div>

                {/* VISIT WEBSITE */}

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-visit"
                >
                  {text.visit} <span>↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* OTHER PROJECTS — 2023 */}

      <div className="other-projects">
        <div className="other-projects-header">
          <span className="section-dot"></span>
          <h3>{text.otherProjects} - 2023</h3>
        </div>
        <div className="other-projects-intro">
          <p>{text.otherProjectsIntro}</p>
          <p className="disclaimer">{text.otherProjectsDisclaimer}</p>
        </div>
        <div className="other-projects-grid">
          <a
            href="https://site-maquette-rando.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="other-project-card"
          >
            <div className="other-project-image">
              <img src="/mon.png" alt="Rando website concept" />
              <span>↗</span>
            </div>
            <p>RANDO</p>
          </a>

          <a
            href="https://tripadvisorangola-exo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="other-project-card"
          >
            <div className="other-project-image">
              <img src="/trip.png" alt="Tripadvisor Angola website concept" />
              <span>↗</span>
            </div>
            <p>TRIPADVISOR ANGOLA</p>
          </a>

          <a
            href="https://site-maquette-gaming.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="other-project-card"
          >
            <div className="other-project-image">
              <img src="/game.png" alt="Gaming website concept" />
              <span>↗</span>
            </div>
            <p>GAMING</p>
          </a>
        </div>
      </div>

      {/* WORK FOOTER */}

      <div className="work-footer">
        {text.more} <span>✳</span>
      </div>
    </section>
  );
}
