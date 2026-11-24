import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";
import "./CookieConsent.css";

function CookieConsent() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(
    () => localStorage.getItem("cookieNoticeDismissed") !== "true",
  );
  const [detailsOpen, setDetailsOpen] = useState(false);

  const text = {
    en: {
      title: "Your privacy matters.",
      description:
        "We currently only use essential website storage. No advertising or analytics cookies are used.",
      button: "Got it",
      learn: "Learn more",
      modalTitle: "Cookie information",
      modalDescription:
        "We respect your privacy. Our website currently does not use advertising or analytics cookies.",
      essential: "Essential storage",
      essentialDescription:
        "Used only when necessary for the basic functioning of the website.",
      active: "Always active",
      close: "Close",
    },
    fr: {
      title: "Votre vie privée compte.",
      description:
        "Nous utilisons actuellement uniquement les stockages essentiels au fonctionnement du site. Aucun cookie publicitaire ou analytique n'est utilisé.",
      button: "Compris",
      learn: "En savoir plus",
      modalTitle: "Informations sur les cookies",
      modalDescription:
        "Nous respectons votre vie privée. Notre site n'utilise actuellement aucun cookie publicitaire ou analytique.",
      essential: "Stockage essentiel",
      essentialDescription:
        "Utilisé uniquement lorsque cela est nécessaire au bon fonctionnement du site.",
      active: "Toujours actif",
      close: "Fermer",
    },
  };

  const t = text[language] || text.en;

  useEffect(() => {
    const openSettings = () => setDetailsOpen(true);

    window.addEventListener("open-cookie-settings", openSettings);

    return () => {
      window.removeEventListener("open-cookie-settings", openSettings);
    };
  }, []);

  const closeNotice = () => {
    localStorage.setItem("cookieNoticeDismissed", "true");
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className="cookie-banner">
          <div className="cookie-content">
            <span className="cookie-eyebrow">THE COOL AXOLOTL</span>

            <h2>{t.title}</h2>

            <p>{t.description}</p>

            <div className="cookie-actions">
              <button className="cookie-primary" onClick={closeNotice}>
                {t.button}
              </button>

              <button
                className="cookie-secondary"
                onClick={() => setDetailsOpen(true)}
              >
                {t.learn}
              </button>
            </div>
          </div>
        </div>
      )}

      {detailsOpen && (
        <div className="cookie-overlay" onClick={() => setDetailsOpen(false)}>
          <div
            className="cookie-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cookie-close"
              onClick={() => setDetailsOpen(false)}
              aria-label={t.close}
            >
              ×
            </button>

            <span className="cookie-eyebrow">THE COOL AXOLOTL</span>

            <h2 id="cookie-modal-title">{t.modalTitle}</h2>

            <p>{t.modalDescription}</p>

            <div className="cookie-category">
              <div>
                <strong>{t.essential}</strong>
                <p>{t.essentialDescription}</p>
              </div>

              <span>{t.active}</span>
            </div>

            <button
              className="cookie-primary cookie-modal-button"
              onClick={() => setDetailsOpen(false)}
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CookieConsent;
