import type {
  TLanguage,
  TAntdI18nMap,
  TLanguageItemWithKey,
  SupportedLocales,
} from '@/typings';

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

export const languages: TLanguageItemWithKey[] = Object.entries(language).map(
  ([key, value]) => ({
    key: key as SupportedLocales,
    ...value,
  })
);

export const antdI18nMap: TAntdI18nMap = {
  zh: 'zh_CN',
  en: 'en_US',
};
