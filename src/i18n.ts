import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation resources
import en from './locales/en/translation.json';
import de from './locales/de/translation.json';
import fr from './locales/fr/translation.json';

// Configure and initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      fr: { translation: fr },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'de', 'fr'],
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // Cache preferred language in localStorage
      caches: ['localStorage'],
      // Detection priority
      order: ['localStorage', 'navigator', 'htmlTag'],
    },
    returnObjects: true,
  });

// Keep <html lang> in sync
i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng || 'en';
  }
});

export default i18n;


