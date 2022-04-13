import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLoading } from '@ant-design/pro-layout';
import { ConfigProvider } from 'antd';
import { I18nProvider } from '@lingui/react';
import { Layout } from '@/components';
import routes from '@/routes';
import { useIntlProvider } from '@/hooks';
import { ConfigContext } from '@/utils/context';

const App: React.FC = () => {
  const { language, setLanguage, i18n, locale } = useIntlProvider();
  const globalConfig = {
    language,
    setLanguage,
  };

  return (
    <ConfigContext.Provider value={globalConfig}>
      {/* @ts-ignore */}
      <I18nProvider i18n={i18n}>
        <ConfigProvider locale={locale}>
          <BrowserRouter>
            <Layout>
              <Suspense fallback={<PageLoading />}>
                <Routes>
                  {routes.map((route, index: number) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.component}
                    />
                  ))}
                </Routes>
              </Suspense>
            </Layout>
          </BrowserRouter>
        </ConfigProvider>
      </I18nProvider>
    </ConfigContext.Provider>
  );
};

export default App;
