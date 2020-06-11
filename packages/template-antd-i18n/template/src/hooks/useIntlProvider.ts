import { useState, useEffect, useContext } from 'react';
import { LOCALE_LANGUAGE } from '@/configs/constants';
import { useLocalStorage } from '@/hooks';
import { IntlConfig } from 'react-intl';
import { TSupportedLocales } from '@/typings';
import { ConfigContext } from '@/utils/context';

const useIntlProvider = () => {
  const [messages, setMessages] = useState<IntlConfig['messages']>();
  const { locale: defaultLocale } = useContext(ConfigContext);
  const [locale, setLocale] = useLocalStorage<TSupportedLocales>(
    LOCALE_LANGUAGE,
    defaultLocale
  );

  useEffect(() => {
    import(`@/locales/${locale}/messages.json`).then(data => setMessages(data));
  }, [locale]);

  return { locale: locale as TSupportedLocales, messages, setLocale };
};

export default useIntlProvider;
