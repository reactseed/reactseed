import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components';
import routes from '@/routes';

const RootRouter = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        {routes.map((route, index: number) => (
          <Route
            key={index}
            {...route}
            element={<Suspense fallback={null}>{route.element}</Suspense>}
          />
        ))}
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default RootRouter;
