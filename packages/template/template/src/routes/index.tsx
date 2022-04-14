import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Simple = lazy(() => import('@/pages/Simple'));

const routes = [
  {
    path: '/',
    component: <Home />,
    index: true,
  },
  {
    path: '/simple',
    component: <Simple />,
  },
];

export default routes;
