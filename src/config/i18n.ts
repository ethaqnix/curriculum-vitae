import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';


i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'fr',
        ns: ['common', 'ppa', 'nafCode', 'enums', 'businessLine'],
        defaultNS: 'common',
        load: 'languageOnly',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        detection: {
            order: ['localStorage', 'navigator'],
        },
        saveMissing: false,
        backend: {
            loadPath: `locales/{{lng}}/{{ns}}.json`,
        },
    });
export default i18n;
