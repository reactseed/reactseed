import { lazy } from 'react';
import { RouteProps } from '@/typings';

const Home = lazy(() => import('@/pages/Home'));
const Hello = lazy(() => import('@/pages/Other/Hello'));
const User = lazy(() => import('@/pages/Other/User'));
const Simple = lazy(() => import('@/pages/Other/Simple'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const routes: RouteProps[] = [
  {
    element: <Home />,
    index: true,
  },
  {
    path: '/hello',
    element: <Hello />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/simple',
    element: <Simple />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
