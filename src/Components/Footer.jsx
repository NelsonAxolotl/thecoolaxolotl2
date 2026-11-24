import { useLanguage } from "../LanguageContext";
import "./Footer.css";

export default function Footer() {
  const { language } = useLanguage();
  const CURRENT_YEAR = new Date().getFullYear();
  const text = {
    en: {
      privacy: "PRIVACY POLICY",
      legal: "LEGAL NOTICE",
      cookies: "COOKIE SETTINGS",
    },
    fr: {
      privacy: "POLITIQUE DE CONFIDENTIALITÉ",
      legal: "MENTIONS LÉGALES",
      cookies: "GESTION DES COOKIES",
    },
  };

  const t = text[language] || text.en;

  const openCookieSettings = () => {
    window.dispatchEvent(new Event("open-cookie-settings"));
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* LEFT COLUMN */}
        <div className="footer-left">
          <div className="footer-brand">
            THE COOL AXOLOTL<span>®</span>
            <a
              href="https://www.instagram.com/thecoolaxoltl/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-instagram"
              aria-label="Instagram - The Cool Axolotl"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
          </div>

          {/* COOKIE SETTINGS */}
          <div className="footer-cookie">
            <button
              type="button"
              onClick={openCookieSettings}
              className="footer-cookie-link"
            >
              {t.cookies}
            </button>
          </div>

          {/* COPYRIGHT */}
          <p className="footer-copyright">© {CURRENT_YEAR} THE COOL AXOLOTL</p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="footer-right">
          {/* AXOLOTL VIDEO */}
          <div className="footer-axolotl">
            <video
              autoPlay
              muted
              playsInline
              loop
              src="/axovideo.mp4"
              onTimeUpdate={(e) => {
                if (e.currentTarget.currentTime >= 3.5) {
                  e.currentTarget.currentTime = 0;
                  e.currentTarget.play();
                }
              }}
            />
          </div>

          {/* LEGAL LINKS */}
          <nav className="footer-links">
            <a href="/privacy-policy">{t.privacy}</a>

            <a href="/legal-notice">{t.legal}</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
