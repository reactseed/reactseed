import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLoading } from '@ant-design/pro-layout';
import { Layout } from '@/components';
import routes from '@/routes';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={<PageLoading />}>
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
