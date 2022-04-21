import type { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { setupI18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { SupportedLocales } from '@/typings';
import enMessages from '@/locales/en/messages.json';
import { en } from 'make-plural/plurals';

const i18n = setupI18n();
i18n.load(SupportedLocales.en, enMessages);
i18n.loadLocaleData(SupportedLocales.en, { plurals: en });
i18n.activate(SupportedLocales.en);

const TestContainer: FC = props => {
  return (
    <BrowserRouter>
      <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
        {props.children}
      </I18nProvider>
    </BrowserRouter>
  );
};

export default TestContainer;
