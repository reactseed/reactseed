export interface RouteProps {
  path: string | string[];
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
  component: () => Promise<{ default: any }>;
}

const routes: RouteProps[] = [
  {
    path: '/',
    component: () => import('@/pages/Home'),
    exact: true,
  },
  {
    path: '/simple',
    component: () => import('@/pages/Simple'),
  },
];

export default routes;
