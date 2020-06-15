import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
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
  zh: zhCN,
  en: enUS,
};
