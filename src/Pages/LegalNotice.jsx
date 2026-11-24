import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";
import "./LegalNotice.css";

export default function LegalNotice() {
  const { language } = useLanguage();

  const content = {
    en: {
      eyebrow: "THE COOL AXOLOTL",
      title: "LEGAL NOTICE",
      intro:
        "This page provides legal information about The Cool Axolotl website and the independent activity behind it.",

      updated: "LAST UPDATED: NOVEMBER 2026",

      sections: [
        {
          title: "01. WEBSITE PUBLISHER",
          text: (
            <>
              This website is published by an independent freelance web design
              and development activity operating in France.
              <br />
              <br />
              Publisher's name: Nelson Paraïso Pereira
              <br />
              Business name: The Cool Axolotl
              <br />
              Legal status: Sole Proprietor – Micro-Entrepreneur (France)
              <br />
              Business address: 4 rue de Metz, 34070 Montpellier, France
              <br />
              Email:{" "}
              <a href="mailto:thecoolaxolotldesigner@gmail.com">
                thecoolaxolotldesigner@gmail.com
              </a>
              <br />
              Registration number (SIRET): 943 022 566 00013
            </>
          ),
        },
        {
          title: "02. PUBLICATION DIRECTOR",
          text: "The publication director is Nelson Paraïso Pereira, responsible for the publication of content on this website.",
        },
        {
          title: "03. WEBSITE HOSTING",
          text: (
            <>
              This website is hosted by:
              <br />
              <br />
              Hosting provider: Vercel Inc.
              <br />
              Address: 440 N Barranca Avenue #4133, Covina, CA 91723, United
              States
              <br />
              Email: <a href="mailto:privacy@vercel.com">privacy@vercel.com</a>
              <br />
              Website:{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com
              </a>
            </>
          ),
        },
        {
          title: "04. INTELLECTUAL PROPERTY",
          text: "Unless otherwise stated, all content on this website, including text, images, graphics, logos, visual elements and design, is protected by intellectual property laws. Any reproduction, distribution, modification or use of this content without prior written permission is prohibited, except where permitted by law.",
        },
        {
          title: "05. WEBSITE CONTENT",
          text: "The information published on this website is provided for general information purposes. Every effort is made to keep it accurate and up to date, but no guarantee is given that all information is complete, accurate or current.",
        },
        {
          title: "06. LIABILITY",
          text: "The publisher cannot be held liable for any direct or indirect damage resulting from access to or use of this website, including temporary unavailability, technical issues or inaccuracies in published content.",
        },
        {
          title: "07. EXTERNAL LINKS",
          text: "This website may contain links to external websites. The publisher has no control over their content and accepts no responsibility for their availability, accuracy or privacy practices.",
        },
        {
          title: "08. PERSONAL DATA",
          text: "Information about the collection and processing of personal data, the use of cookies and your rights is available in the Privacy Policy.",
        },
        {
          title: "09. APPLICABLE LAW",
          text: "This website and its legal notices are governed by French law, subject to any mandatory provisions of applicable law.",
        },
        {
          title: "10. CONTACT",
          text: (
            <>
              For any questions concerning this website or these legal notices,
              please contact:
              <br />
              <a href="mailto:thecoolaxolotldesigner@gmail.com">
                thecoolaxolotldesigner@gmail.com
              </a>
            </>
          ),
        },
      ],

      privacyLink: "PRIVACY POLICY",
      back: "← THE COOL AXOLOTL",
    },

    fr: {
      eyebrow: "THE COOL AXOLOTL",
      title: "MENTIONS LÉGALES",
      intro:
        "Cette page présente les informations légales relatives au site The Cool Axolotl et à l'activité indépendante qui l'exploite.",

      updated: "DERNIÈRE MISE À JOUR : NOVEMBRE 2026",

      sections: [
        {
          title: "01. ÉDITEUR DU SITE",
          text: (
            <>
              Ce site est édité dans le cadre d'une activité indépendante de web
              design et de développement web exercée en France.
              <br />
              <br />
              Nom de l'éditeur : Nelson Paraïso Pereira
              <br />
              Nom commercial : The Cool Axolotl
              <br />
              Statut juridique : Entrepreneur individuel (micro-entrepreneur)
              <br />
              Adresse professionnelle : 4 rue de Metz, 34070 Montpellier
              <br />
              Adresse e-mail :{" "}
              <a href="mailto:thecoolaxolotldesigner@gmail.com">
                thecoolaxolotldesigner@gmail.com
              </a>
              <br />
              Numéro SIRET : 943 022 566 00013
            </>
          ),
        },
        {
          title: "02. DIRECTEUR DE LA PUBLICATION",
          text: "Le directeur de la publication est Nelson Paraïso Pereira, responsable de la publication des contenus sur ce site.",
        },
        {
          title: "03. HÉBERGEMENT DU SITE",
          text: (
            <>
              Le site est hébergé par :
              <br />
              <br />
              Hébergeur : Vercel Inc.
              <br />
              Adresse : 440 N Barranca Avenue #4133, Covina, CA 91723,
              États-Unis
              <br />
              Adresse e-mail :{" "}
              <a href="mailto:privacy@vercel.com">privacy@vercel.com</a>
              <br />
              Site internet :{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com
              </a>
            </>
          ),
        },
        {
          title: "04. PROPRIÉTÉ INTELLECTUELLE",
          text: "Sauf mention contraire, l'ensemble des contenus présents sur ce site, notamment les textes, images, graphismes, logos, éléments visuels et éléments de design, est protégé par le droit de la propriété intellectuelle. Toute reproduction, diffusion, modification ou utilisation sans autorisation écrite préalable est interdite, sauf exceptions prévues par la loi.",
        },
        {
          title: "05. CONTENU DU SITE",
          text: "Les informations publiées sur ce site sont fournies à titre indicatif. Malgré le soin apporté à leur rédaction et à leur mise à jour, aucune garantie n'est donnée quant à leur exhaustivité, leur exactitude ou leur actualité.",
        },
        {
          title: "06. RESPONSABILITÉ",
          text: "L'éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès au site ou de son utilisation, notamment en cas d'indisponibilité temporaire, de problème technique ou d'inexactitude des contenus publiés.",
        },
        {
          title: "07. LIENS EXTERNES",
          text: "Le site peut contenir des liens vers des sites internet externes. L'éditeur n'exerce aucun contrôle sur leur contenu et ne peut être tenu responsable de leur disponibilité, de l'exactitude des informations publiées ou de leurs pratiques en matière de confidentialité.",
        },
        {
          title: "08. DONNÉES PERSONNELLES",
          text: "Les informations relatives à la collecte et au traitement des données personnelles, à l'utilisation des cookies ainsi qu'à vos droits sont disponibles dans la Politique de confidentialité.",
        },
        {
          title: "09. DROIT APPLICABLE",
          text: "Le présent site et ses mentions légales sont soumis au droit français, sous réserve des dispositions impératives du droit applicable.",
        },
        {
          title: "10. CONTACT",
          text: (
            <>
              Pour toute question concernant ce site ou les présentes mentions
              légales, vous pouvez contacter l'éditeur à l'adresse suivante :
              <br />
              <a href="mailto:thecoolaxolotldesigner@gmail.com">
                thecoolaxolotldesigner@gmail.com
              </a>
            </>
          ),
        },
      ],

      privacyLink: "POLITIQUE DE CONFIDENTIALITÉ",
      back: "← THE COOL AXOLOTL",
    },
  };

  const t = content[language] || content.en;

  return (
    <main className="legal-page">
      <div className="legal-inner">
        <header className="legal-header">
          <p className="legal-eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="legal-intro">{t.intro}</p>
          <span className="legal-updated">{t.updated}</span>
        </header>

        <div className="legal-content">
          {t.sections.map((section, index) => (
            <article className="legal-section" key={index}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </div>

        <div className="legal-back">
          <Link to="/">{t.back}</Link>
        </div>
      </div>
    </main>
  );
}
