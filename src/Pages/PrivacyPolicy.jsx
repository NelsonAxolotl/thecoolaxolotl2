import { useLanguage } from "../LanguageContext";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const content = {
    en: {
      eyebrow: "THE COOL AXOLOTL",
      title: "PRIVACY POLICY",
      intro:
        "This page explains how personal data may be collected, used and protected when you visit this website.",

      updated: "LAST UPDATED: NOVEMBER 2026",

      sections: [
        {
          title: "01. DATA CONTROLLER",
          text: "The Cool Axolotl is an independent freelance web design and development activity based in France. The data controller is the person operating this website. Contact details are provided in the Legal Notice.",
        },
        {
          title: "02. PERSONAL DATA WE COLLECT",
          text: "Depending on how you interact with this website, personal data may include your name, email address and the information you choose to provide when contacting us. Technical information, such as browser type or pages visited, may also be collected through server logs or website tools.",
        },
        {
          title: "03. HOW WE USE YOUR DATA",
          text: "Personal data may be used to respond to enquiries, communicate about potential projects, provide requested services, maintain website security and meet legal obligations.",
        },
        {
          title: "04. LEGAL BASIS",
          text: "Depending on the purpose, processing may be based on your consent, steps taken at your request before entering into a contract, the performance of a contract, a legal obligation or our legitimate interests.",
        },
        {
          title: "05. DATA RETENTION",
          text: "Personal data is kept only for as long as necessary for the purpose for which it was collected, or for the period required by applicable legal obligations.",
        },
        {
          title: "06. DATA SHARING",
          text: "Personal data is not sold. It may be shared with technical service providers when necessary to operate this website or deliver services, subject to appropriate safeguards.",
        },
        {
          title: "07. COOKIES",
          text: "This website may use cookies or similar technologies. Where consent is required, non-essential cookies will only be used after your consent. You can manage cookies through your browser settings.",
        },
        {
          title: "08. YOUR RIGHTS",
          text: "Under applicable data protection law, including the GDPR, you may have the right to access, rectify, erase or restrict the processing of your personal data, object to certain processing and request data portability. Where processing is based on consent, you may withdraw it at any time.",
        },
        {
          title: "09. CONTACT",
          text: "For any questions or requests concerning your personal data, please use the contact details provided in the Legal Notice.",
        },
        {
          title: "10. CHANGES TO THIS POLICY",
          text: "This Privacy Policy may be updated to reflect changes to the website, our practices or applicable legal requirements. The latest version will be published on this page.",
        },
      ],
    },

    fr: {
      eyebrow: "THE COOL AXOLOTL",
      title: "POLITIQUE DE CONFIDENTIALITÉ",
      intro:
        "Le respect de votre vie privée est important. Cette page explique comment vos données peuvent être collectées, utilisées et protégées lorsque vous consultez ce site.",

      updated: "DERNIÈRE MISE À JOUR : NOVEMBRE 2026",

      sections: [
        {
          title: "01. RESPONSABLE DU TRAITEMENT",
          text: "The Cool Axolotl est une activité indépendante de web design et de développement web basée en France. Le responsable du traitement est la personne qui exploite ce site. Ses coordonnées sont indiquées dans les mentions légales.",
        },
        {
          title: "02. DONNÉES PERSONNELLES COLLECTÉES",
          text: "Selon votre utilisation du site, les données personnelles susceptibles d'être collectées comprennent votre nom, votre adresse e-mail et les informations que vous choisissez de communiquer lors d'une prise de contact. Certaines informations techniques, comme le navigateur utilisé ou les pages consultées, peuvent également être recueillies par les journaux du serveur ou les outils du site.",
        },
        {
          title: "03. UTILISATION DES DONNÉES",
          text: "Les données personnelles peuvent être utilisées pour répondre à vos demandes, échanger au sujet de projets, fournir les prestations demandées, assurer la sécurité du site et respecter les obligations légales.",
        },
        {
          title: "04. BASES LÉGALES",
          text: "Selon la finalité du traitement, les bases légales peuvent être votre consentement, des mesures précontractuelles prises à votre demande, l'exécution d'un contrat, le respect d'une obligation légale ou l'intérêt légitime du responsable du traitement.",
        },
        {
          title: "05. DURÉE DE CONSERVATION",
          text: "Les données personnelles sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, ou pendant la durée imposée par les obligations légales applicables.",
        },
        {
          title: "06. PARTAGE DES DONNÉES",
          text: "Les données personnelles ne sont pas vendues. Elles peuvent être transmises à des prestataires techniques lorsque cela est nécessaire au fonctionnement du site ou à la réalisation des prestations, dans le respect des garanties applicables.",
        },
        {
          title: "07. COOKIES",
          text: "Ce site peut utiliser des cookies ou technologies similaires. Lorsque le consentement est requis, les cookies non essentiels ne sont utilisés qu'après votre accord. Vous pouvez également gérer les cookies depuis les paramètres de votre navigateur.",
        },
        {
          title: "08. VOS DROITS",
          text: "Conformément au RGPD, vous disposez de droits d'accès, de rectification, d'effacement, d'opposition et de portabilité de vos données. Vous pouvez également retirer votre consentement à tout moment.",
        },
        {
          title: "09. CONTACT",
          text: "Pour toute question ou demande concernant vos données personnelles, utilisez les coordonnées indiquées dans les mentions légales.",
        },
        {
          title: "10. MODIFICATION DE LA POLITIQUE",
          text: "Cette politique de confidentialité peut être actualisée afin de tenir compte des évolutions du site, de nos pratiques ou de la réglementation. La dernière version sera publiée sur cette page.",
        },
      ],
    },
  };

  const t = content[language] || content.en;

  return (
    <main className="privacy-page">
      <div className="privacy-inner">
        <header className="privacy-header">
          <p className="privacy-eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="privacy-intro">{t.intro}</p>
          <span className="privacy-updated">{t.updated}</span>
        </header>

        <div className="privacy-content">
          {t.sections.map((section, index) => (
            <article className="privacy-section" key={index}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </div>

        <div className="privacy-back">
          <a href="/">← THE COOL AXOLOTL</a>
        </div>
      </div>
    </main>
  );
}
