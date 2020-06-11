export type TSupportedLocales = 'en' | 'zh';

export interface TConfigContext {
  locale: TSupportedLocales;
  setLocale: (locale: TSupportedLocales) => void;
}

export interface TLanguageItem {
  flag: string;
  value: string;
}

export interface TLanguage {
  [key: string]: TLanguageItem;
}
