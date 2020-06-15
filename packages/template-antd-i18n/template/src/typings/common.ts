import { ConfigProviderProps } from 'antd/lib/config-provider';

export type TSupportedLocales = 'en' | 'zh';

export interface TConfigContext {
  language: TSupportedLocales;
  setLanguage: (language: TSupportedLocales) => void;
}

export interface TLanguageItem {
  flag: string;
  value: string;
}

export interface TLanguage {
  [key: string]: TLanguageItem;
}

export interface TAntdI18nMap {
  [key: string]: ConfigProviderProps['locale'];
}
