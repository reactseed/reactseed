/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const devServer = require('@reactseed/devserver');
const { addReactRefresh } = require('customize-cra-react-refresh');
const {
  override,
  addWebpackAlias,
  addLessLoader,
  overrideDevServer,
  fixBabelImports,
  addBabelPreset,
} = require('customize-cra');

module.exports = {
  webpack: override(
    addReactRefresh(),
    addBabelPreset('@lingui/babel-preset-react'),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
          hack: `true; @import "src/themes/antd.var.less";`, // Override antd
        },
      },
    }),
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    }),
    fixBabelImports('antd', {
      libraryDirectory: 'es',
      style: true,
    }),
  ),
  devServer: overrideDevServer(devServer, config => {
    config.inline = true;
    // eslint-disable-next-line no-undef
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 10000);
    return config;
  }),
};
