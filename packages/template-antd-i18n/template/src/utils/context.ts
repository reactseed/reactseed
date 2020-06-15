import React from 'react';
import { config } from '@/configs';
import { TConfigContext } from '@/typings';

export const ConfigContext = React.createContext<TConfigContext>({
  language: config.language,
  setLanguage: language => null,
});
