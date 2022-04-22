import { apiPrefix } from './constant';
import packageJSON from '../package.json';

const api = {
  [`GET ${apiPrefix}/app`]: packageJSON,
};

export default api;
