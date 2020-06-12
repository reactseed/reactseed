import React from 'react';
import { TConfigContext } from '@/typings';

export const ConfigContext = React.createContext<TConfigContext>({
  locale: 'en',
  setLocale: locale => null,
});
