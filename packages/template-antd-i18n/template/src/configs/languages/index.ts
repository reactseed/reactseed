import { TLanguage, TAntdI18nMap } from '@/typings';

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

export const antdI18nMap: TAntdI18nMap = {
  zh: 'zh_CN',
  en: 'en_US',
};
