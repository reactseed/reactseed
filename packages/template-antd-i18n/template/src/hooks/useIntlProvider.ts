import { useEffect, useContext } from 'react';
import { setupI18n } from '@lingui/core';
import { LOCALE_LANGUAGE } from '@/configs/constants';
import { ConfigContext } from '@/utils/context';
import { useLocalStorage } from '@/hooks';
import { TSupportedLocales } from '@/typings';

const i18n = setupI18n();

const useIntlProvider = () => {
  const { language: defaultLocale } = useContext(ConfigContext);
  const [language, setLanguage] = useLocalStorage<TSupportedLocales>(
    LOCALE_LANGUAGE,
    defaultLocale
  );

  useEffect(() => {
    import(`@/locales/${language}/messages.json`).then(data => {
      i18n.load(language, data.default);
      i18n.activate(language);
    });
  }, [language]);

  return {
    language: language as TSupportedLocales,
    setLanguage,
    i18n,
  };
};

export default useIntlProvider;
