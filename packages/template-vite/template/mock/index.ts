import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/api/mock/reactseed',
    method: 'get',
    response: ({ query, url }) => {
      return {
        code: 200,
        msg: '',
        data: 'welcome to reactseed for vite',
      };
    },
  },
] as MockMethod[];
