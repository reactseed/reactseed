import { TLanguage } from '@/typings';

export const language: TLanguage = {
  zh: {
    flag: '🇨🇳',
    value: '简体中文',
  },
  en: {
    flag: '🇺🇸',
    value: 'English',
  },
};

export const languages = Object.entries(language).map(([key, value]: any) => ({
  key,
  ...value,
}));
