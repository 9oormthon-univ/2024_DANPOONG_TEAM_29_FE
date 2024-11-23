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
      'form',
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

i18next.use({
  type: 'postProcessor',
  name: 'petitionNameHandler',
  process: (value: string, _: unknown, options: Record<string, string>) => {
    return value.replace('{{name}}', options.name);
  },
});

i18next.use({
  type: 'postProcessor',
  name: 'petitionTitleHandler',
  process: (value: string, _: unknown, options: Record<string, string>) => {
    return value.replace('{{title}}', options.name);
  },
});

i18next.use({
  type: 'postProcessor',
  name: 'feedEmptyHandler',
  process: (value: string, _: unknown, options: Record<string, string>) => {
    return value.replace('{{feed}}', options.name);
  },
});

export default i18next;
