import { Route } from '@/typings/router';

const menus: Route[] = [
  {
    path: '/',
    name: 'Home',
    icon: 'home',
  },
  {
    name: 'Other',
    key: '/other',
    icon: 'other',
    children: [
      {
        path: '/app-info',
        name: 'App Info (api mock)',
      },
      {
        path: '/hello',
        name: 'Hello (zustand)',
      },
      {
        path: '/user',
        name: 'User (axios)',
      },
      {
        path: '/i18n',
        name: 'i18n (useLingui)',
      },
      {
        path: '/simple',
        name: 'Simple',
      },
      {
        path: '/simple2',
        name: 'Not found',
      },
    ],
  },
];

export default menus;
