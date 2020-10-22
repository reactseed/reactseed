/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { override, addWebpackAlias, addLessLoader } = require('customize-cra');

module.exports = {
  webpack: override(
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
      },
    }),
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    })
  ),
};
