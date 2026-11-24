import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./LanguageContext";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import CookieConsent from "./Components/CookieConsent";
import SEO from "./Components/SEO";

import Work from "./Pages/Work";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import LegalNotice from "./Pages/LegalNotice";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <SEO />

        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Work />
                <About />
                <Contact />
              </>
            }
          />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/legal-notice" element={<LegalNotice />} />
        </Routes>

        <CookieConsent />

        <Footer />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
