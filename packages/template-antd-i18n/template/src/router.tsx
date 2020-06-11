import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageLoading } from '@ant-design/pro-layout';
import { IntlProvider } from 'react-intl';
import { hot } from 'react-hot-loader/root';
import { Layout } from '@/components';
import { useIntlProvider } from '@/hooks';
import routes from '@/routes';
import { ConfigContext } from '@/utils/context';
import { TConfigContext } from '@/typings';

const App: React.FC = () => {
  const { locale, setLocale, messages } = useIntlProvider();
  const globalValue = {
    locale,
    setLocale: setLocale as TConfigContext['setLocale'],
  };

  return (
    <IntlProvider messages={messages} locale={locale}>
      <ConfigContext.Provider value={globalValue}>
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
      </ConfigContext.Provider>
    </IntlProvider>
  );
};

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
