import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "fr",
    debug: false,
    ns: ["main", "common", "pdf"],
    defaultNS: "common",
    load: "languageOnly",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ["localStorage", "navigator"],
    },
    saveMissing: false,
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
    },
    parseMissingKeyHandler: (missingKey) => {
      return missingKey.split(".").reverse()[0];
    },
  });
export default i18n;
