import apiMocker from 'mocker-api';
import { resolve } from 'path';

export default function proxy(app) {
  apiMocker(app, resolve('./mock/app'), {
    proxy: {
      '/api': 'https://api.github.com',
    },
    changeHost: true,
  });
}
