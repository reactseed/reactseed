import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
      <I18nProvider i18n={i18n}>
        <ConfigProvider locale={locale}>
          <Router>
            <Layout>
              <Suspense fallback={<PageLoading />}>
                <Switch>
                  {routes.map(({ component, ...restProps }, index: number) => (
                    <Route
                      {...restProps}
                      key={index}
                      render={props => {
                        const LazyComponent = lazy(component);
                        return <LazyComponent {...props} />;
                      }}
                    />
                  ))}
                </Switch>
              </Suspense>
            </Layout>
          </Router>
        </ConfigProvider>
      </I18nProvider>
    </ConfigContext.Provider>
  );
};

export default App;
