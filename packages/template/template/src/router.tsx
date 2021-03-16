import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from '@/components';
import routes, { RouteProps } from '@/routes';

const RootRouter = () => (
  <Router>
    <Suspense fallback={null}>
      <Switch>
        {routes.map((route: RouteProps, index: number) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            sensitive={route.sensitive}
            render={() => {
              const RouteLazy = lazy(route.component);

              return (
                <Layout>
                  <RouteLazy />
                </Layout>
              );
            }}
          />
        ))}
      </Switch>
    </Suspense>
  </Router>
);

export default RootRouter;
