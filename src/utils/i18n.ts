import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpBackend)
  .init({
    ns: [
      'initInfo',
      'home',
      'feed',
      'post',
      'form',
      'petitionFeed',
      'petitionPost',
      'petitionForm',
    ],
    fallbackLng: 'ko',
    backend: {
      loadPath: '/locale/{{lng}}/{{ns}}.json',
    },
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['navigator', 'querystring', 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
  });

export default i18next;
