import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// --- Constants ---
const DEFAULT_NAMESPACE = 'translation';
const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGES = ['en', 'vi', 'fr', ]; 
const LOAD_PATH = 'locales/{{lng}}/{{ns}}.json'; // Đường dẫn tới file JSON chứa translations
i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // --- Basic Config ---
    fallbackLng: DEFAULT_LANGUAGE, 
    supportedLngs: SUPPORTED_LANGUAGES, 
    ns: [DEFAULT_NAMESPACE], // Namespace mặc định
    defaultNS: DEFAULT_NAMESPACE,

    // --- Detection ---
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'], 
    },

    // --- Backend ---
    backend: {
      loadPath: LOAD_PATH,
    },

    react: {
      useSuspense: true,
    },

    // --- Debugging ---
    debug: import.meta.env.DEV,

    // --- Interpolation ---
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;