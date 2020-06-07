import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageLoading } from '@ant-design/pro-layout';
import { hot } from 'react-hot-loader/root';
import { Layout } from '@/components';
import routes from '@/routes';

const App = () => (
  <Router>
    <Layout>
      <Suspense fallback={<PageLoading />}>
        <Switch>
          {routes.map((route, index: number) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              strict={route.strict}
              render={props => {
                const LazyComponent = lazy(route.component);
                return <LazyComponent {...props} />;
              }}
            />
          ))}
        </Switch>
      </Suspense>
    </Layout>
  </Router>
);

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
