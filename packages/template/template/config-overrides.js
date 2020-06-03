/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const devServer = require('@reactseed/devserver');
const {
  override,
  addWebpackAlias,
  addLessLoader,
  overrideDevServer,
} = require('customize-cra');

module.exports = {
  webpack: override(
    addLessLoader({
      javascriptEnabled: true,
    }),
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    })
  ),
  devServer: overrideDevServer(devServer),
};
