export enum SupportedLocales {
  en = 'en',
  zh = 'zh',
}

export interface TConfigContext {
  language: SupportedLocales;
  setLanguage: (language: SupportedLocales) => void;
}

export interface TLanguageItem {
  flag: string;
  value: string;
}

export interface TLanguageItemWithKey extends TLanguageItem {
  key: SupportedLocales;
  flag: string;
  value: string;
}

export type TLanguage = {
  [key in SupportedLocales]: TLanguageItem;
};

export type TAntdI18nMap = {
  [key in SupportedLocales]: string;
};

export interface TConfig {
  language: SupportedLocales;
  title: string;
  logo: string;
  [key: string]: string;
}
