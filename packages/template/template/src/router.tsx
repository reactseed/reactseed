import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components';
import routes from '@/routes';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          {routes.map((route, index: number) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </Suspense>
    </Layout>
  </BrowserRouter>
);

export default App;
