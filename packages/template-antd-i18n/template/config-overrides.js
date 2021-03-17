/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const devServer = require('@reactseed/devserver');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const {
  override,
  addWebpackAlias,
  addLessLoader,
  overrideDevServer,
  fixBabelImports,
  addBabelPreset,
  addWebpackPlugin,
} = require('customize-cra');

module.exports = {
  webpack: override(
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
    addWebpackPlugin(new AntdDayjsWebpackPlugin())
  ),
  devServer: overrideDevServer(devServer),
};
