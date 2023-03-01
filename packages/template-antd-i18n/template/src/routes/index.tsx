import { lazy } from 'react';
import type { RouteProps } from '@/typings';

const Home = lazy(() => import('@/pages/Home'));
const AppInfo = lazy(() => import('@/pages/Other/AppInfo'));
const Hello = lazy(() => import('@/pages/Other/Hello'));
const User = lazy(() => import('@/pages/Other/User'));
const Simple = lazy(() => import('@/pages/Other/Simple'));
const I18N = lazy(() => import('@/pages/Other/I18N'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const routes: RouteProps[] = [
  {
    element: <Home />,
    index: true,
  },
  {
    path: '/app-info',
    element: <AppInfo />,
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
    path: '/i18n',
    element: <I18N />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
