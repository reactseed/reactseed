import { MockMethod } from 'vite-plugin-mock';
import { apiPrefix } from './constant';
import packageJSON from '../package.json';

export default [
  {
    url: `${apiPrefix}/app`,
    response: packageJSON,
  },
] as MockMethod[];
