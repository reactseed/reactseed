import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Hello = lazy(() => import('@/pages/Other/Hello'));
const User = lazy(() => import('@/pages/Other/User'));
const CracoMockerApi = lazy(() => import('@/pages/Other/CracoMockerApi'));
const Simple = lazy(() => import('@/pages/Other/Simple'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const routes = [
  {
    path: '/',
    component: <Home />,
    index: true,
  },
  {
    path: '/hello',
    component: <Hello />,
  },
  {
    path: '/user',
    component: <User />,
  },
  {
    path: '/cracomockerapi',
    component: <CracoMockerApi />,
  },
  {
    path: '/simple',
    component: <Simple />,
  },
  {
    path: '*',
    component: <NotFound />,
  },
];

export default routes;
