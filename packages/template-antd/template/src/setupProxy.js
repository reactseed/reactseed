import mocker from 'mocker-api';
import { resolve } from 'path';

export default function proxy(app) {
  mocker(app, resolve('./mock/app'), {
    proxy: {
      '/api': 'https://api.github.com',
    },
    changeHost: true,
  });
}
