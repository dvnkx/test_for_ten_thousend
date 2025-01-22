import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en, ar} from '.';

const languagesResources = {
  en: {translation: en},
  ar: {translation: ar},
};

i18next.use(initReactI18next).init({
  resources: languagesResources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {escapeValue: false},
});

export default i18next;
