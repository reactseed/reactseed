import mocker from 'mocker-api';
import { resolve } from 'path';

module.exports = function (app) {
  mocker(app, resolve('./mock/app'), {
    proxy: {
      '/api': 'https://api.github.com',
    },
    changeHost: true,
  });
};
