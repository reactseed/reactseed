import { Route } from '@/typings/router';

/*
 * Note:
 * Menu items with children need to set a key starting with "/"
 * @see https://github.com/umijs/route-utils/blob/master/src/transformRoute/transformRoute.ts#L219
 */

const menus: Route[] = [
  {
    path: '/',
    name: 'Home',
  },
  {
    name: 'Other',
    key: '/other',
    children: [
      {
        path: '/hello',
        name: 'Hello (useRedux)',
      },
      {
        path: '/user',
        name: 'User (useRequest)',
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
