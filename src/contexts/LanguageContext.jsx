import { createContext, useContext, useState, useCallback } from "react";
import pt from "../i18n/pt";
import en from "../i18n/en";

const LanguageContext = createContext();

const translations = { pt, en };

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("portfolio-lang") || "pt";
  });

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "pt" ? "en" : "pt";
      localStorage.setItem("portfolio-lang", next);
      return next;
    });
  };

  const t = useCallback(
    (key) => {
      const keys = key.split(".");
      let value = translations[lang];
      for (const k of keys) {
        value = value?.[k];
      }
      return value ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
