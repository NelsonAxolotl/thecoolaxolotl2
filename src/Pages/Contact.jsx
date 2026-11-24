import { useRef, useState } from "react";
import "./Contact.css";
import { useLanguage } from "../LanguageContext";

const translations = {
  en: {
    eyebrow: "LET'S CONNECT",
    titleStart: "HAVE A",
    titleHighlight: "PROJECT",
    titleEnd: "IN MIND?",
    intro: "Got something in mind? Let's bring it to life",
    name: "NAME",
    namePlaceholder: "Your name",
    email: "EMAIL",
    emailPlaceholder: "Your email address",
    subject: "SUBJECT",
    subjectPlaceholder: "What's it about?",
    message: "MESSAGE",
    messagePlaceholder: "Tell me about your project...",
    submit: "SEND MESSAGE",
    sending: "SENDING...",
    success: "MESSAGE SENT",
    error: "Something went wrong. Please try again.",
    emailLabel: "PREFER EMAIL?",
  },
  fr: {
    eyebrow: "PARLONS-EN",
    titleStart: "VOUS AVEZ UN",
    titleHighlight: "PROJET",
    titleEnd: "EN TÊTE ?",
    intro: "Une idée à concrétiser ? Donnons-lui vie",
    name: "NOM",
    namePlaceholder: "Votre nom",
    email: "EMAIL",
    emailPlaceholder: "Votre adresse email",
    subject: "SUJET",
    subjectPlaceholder: "De quoi s'agit-il ?",
    message: "MESSAGE",
    messagePlaceholder: "Parlez-moi de votre projet...",
    submit: "ENVOYER LE MESSAGE",
    sending: "ENVOI EN COURS...",
    success: "MESSAGE ENVOYÉ",
    error: "Une erreur est survenue. Veuillez réessayer.",
    emailLabel: "VOUS PRÉFÉREZ UN EMAIL ?",
  },
};

export default function Contact() {
  const { language } = useLanguage();
  const text = translations[language] || translations.en;

  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <p className="contact-eyebrow">{text.eyebrow}</p>

        <h2>
          {text.titleStart}{" "}
          <span className="gradient-text">{text.titleHighlight}</span>
          <br />
          {text.titleEnd}
        </h2>

        <p className="contact-intro">{text.intro}</p>
        <div className="contact-divider"></div>
        <form
          ref={formRef}
          className="contact-form"
          action="https://formspree.io/f/xzerbvga"
          method="POST"
          onSubmit={handleSubmit}
          onChange={() => {
            if (status === "success" || status === "error") {
              setStatus("idle");
            }
          }}
        >
          <div className="contact-field">
            <label htmlFor="name">{text.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={text.namePlaceholder}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email">{text.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={text.emailPlaceholder}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="subject">{text.subject}</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder={text.subjectPlaceholder}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message">{text.message}</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder={text.messagePlaceholder}
              required
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? text.sending
              : status === "success"
                ? `${text.success} ✓`
                : text.submit}

            {status === "idle" && <span>↗</span>}
          </button>

          {status === "error" && (
            <p className="contact-status error" role="alert">
              {text.error}
            </p>
          )}
          {status === "success" && (
            <p className="contact-status success" role="status">
              {text.success} ✓
            </p>
          )}
        </form>
        <div className="contact-email">
          <p>{text.emailLabel}</p>
          <a href="mailto:thecoolaxolotldesigner@gmail.com">
            thecoolaxolotldesigner@gmail.com
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
