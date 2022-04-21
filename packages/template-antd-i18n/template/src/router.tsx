import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLoading } from '@ant-design/pro-layout';
import { ConfigProvider } from 'antd';
import { I18nProvider } from '@lingui/react';
import { Layout } from '@/components';
import routes from '@/routes';
import { useIntlProvider } from '@/hooks';
import { ConfigContext } from '@/utils/context';

const RootRouter = () => {
  const { language, setLanguage, i18n, locale } = useIntlProvider();
  const globalConfig = {
    language,
    setLanguage,
  };

  return (
    <ConfigContext.Provider value={globalConfig}>
      <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
        <ConfigProvider locale={locale}>
          <BrowserRouter>
            <Layout>
              <Routes>
                {routes.map((route, index: number) => (
                  <Route
                    key={index}
                    {...route}
                    element={
                      <Suspense fallback={<PageLoading />}>
                        {route.element}
                      </Suspense>
                    }
                  />
                ))}
              </Routes>
            </Layout>
          </BrowserRouter>
        </ConfigProvider>
      </I18nProvider>
    </ConfigContext.Provider>
  );
};

export default RootRouter;
