import "./Navbar.css";

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  // Menu state synchronized with the current route
  const [menuState, setMenuState] = useState({
    open: false,
    locationKey: null,
  });

  const menuOpen = menuState.open && menuState.locationKey === location.key;

  const closeMenu = () => {
    setMenuState({
      open: false,
      locationKey: null,
    });
  };

  const navText = {
    en: {
      work: "WORK",
      about: "ABOUT",
      contact: "CONTACT",
    },
    fr: {
      work: "PROJETS",
      about: "À PROPOS",
      contact: "CONTACT",
    },
  };

  const current = navText[language] || navText.en;

  const navItems = [
    { id: "work", label: current.work },
    { id: "about", label: current.about },
    { id: "contact", label: current.contact },
  ];

  // Central navigation function
  const goToSection = (id) => {
    closeMenu();

    const hash = id ? `#${id}` : "";

    if (location.pathname !== "/") {
      navigate({
        pathname: "/",
        hash,
      });
      return;
    }

    if (location.hash !== hash) {
      navigate(
        {
          pathname: "/",
          hash,
        },
        { replace: id === "" },
      );
    } else {
      // Wait until the mobile menu has closed
      // and the body scroll lock has been released
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (id) {
            document.getElementById(id)?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          } else {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }

          setActive(id);
        });
      });
    }
  };

  // Handle navigation and URL changes
  useEffect(() => {
    if (location.pathname !== "/") return;

    requestAnimationFrame(() => {
      const id = location.hash.substring(1);

      if (id) {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
        setActive(id);
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setActive("");
      }
    });
  }, [location.pathname, location.hash]);

  // Handle scroll and active navigation links
  useEffect(() => {
    const handleScroll = () => {
      const threshold =
        location.pathname === "/" ? window.innerHeight * 0.75 : 10;

      setScrolled(window.scrollY > threshold);

      const sections = ["work", "about", "contact"];
      let currentActive = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (
            rect.top <= window.innerHeight * 0.45 &&
            rect.bottom > window.innerHeight * 0.45
          ) {
            currentActive = id;
          }
        }
      });

      setActive(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // Lock background scroll and handle Escape
  useEffect(() => {
    if (!menuOpen) return;

    const scrollY = window.scrollY;

    const previousStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.position = previousStyles.position;
      document.body.style.top = previousStyles.top;
      document.body.style.width = previousStyles.width;
      document.body.style.overflow = previousStyles.overflow;

      window.removeEventListener("keydown", handleKeyDown);

      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  return (
    <nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""} ${
        menuOpen ? "menu-is-open" : ""
      }`}
    >
      {/* BRAND + LANGUAGE */}
      <div className="navbar-brand">
        <Link
          to="/"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            goToSection("");
          }}
        >
          <img src="/axolotllogo.webp" alt="The Cool Axolotl" />
        </Link>

        <div className="navbar-language">
          <button
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>

          <button
            className={language === "fr" ? "active" : ""}
            onClick={() => setLanguage("fr")}
          >
            FR
          </button>
        </div>
      </div>

      {/* DESKTOP NAVIGATION */}
      <div className="navbar-links">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={`/#${item.id}`}
            className={active === item.id ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              goToSection(item.id);
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* MOBILE BURGER */}
      <button
        className={`navbar-burger ${menuOpen ? "is-open" : ""}`}
        onClick={() =>
          setMenuState({
            open: !menuOpen,
            locationKey: location.key,
          })
        }
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        aria-haspopup="true"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MOBILE MENU */}
      <div
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "menu-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="mobile-menu-content">
          <Link
            to="/"
            className="mobile-menu-logo"
            onClick={(e) => {
              e.preventDefault();
              goToSection("");
            }}
            tabIndex={menuOpen ? 0 : -1}
            aria-label="The Cool Axolotl - Home"
          >
            <img src="/axolotllogo.webp" alt="" />
          </Link>

          <p className="mobile-menu-label">NAVIGATION</p>

          {navItems.map((item, index) => (
            <Link
              key={item.id}
              to={`/#${item.id}`}
              className={`mobile-menu-link ${
                active === item.id ? "active" : ""
              }`}
              style={{ "--item-index": index }}
              onClick={(e) => {
                e.preventDefault();
                goToSection(item.id);
              }}
            >
              {item.label}

              <span className="mobile-menu-arrow">↗</span>
            </Link>
          ))}

          <div className="mobile-menu-footer">
            <span>THE COOL AXOLOTL®</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
