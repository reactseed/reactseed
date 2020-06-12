import React from 'react';
import { TConfigContext } from '@/typings';

export const ConfigContext = React.createContext<TConfigContext>({
  language: 'en',
  setLanguage: language => null,
});
