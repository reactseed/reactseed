import { lazy } from 'react';
import type { IndexRouteProps, PathRouteProps } from 'react-router-dom';
type RouteProps = IndexRouteProps | PathRouteProps;

const Home = lazy(() => import('@/pages/Home'));
const Simple = lazy(() => import('@/pages/Simple'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const routes: RouteProps[] = [
  {
    element: <Home />,
    index: true,
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
