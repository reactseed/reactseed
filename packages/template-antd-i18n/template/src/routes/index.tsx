import { RouteProps } from '@/typings';

const routes: RouteProps[] = [
  {
    path: '/',
    component: () => import('@/pages/Home'),
    exact: true,
  },
  {
    path: '/User',
    component: () => import('@/pages/User'),
  },
  {
    path: '/simple',
    component: () => import('@/pages/Simple'),
  },
  {
    component: () => import('@/pages/NotFound'),
  },
];

export default routes;
