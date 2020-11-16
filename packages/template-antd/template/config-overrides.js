/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const devServer = require('@reactseed/devserver');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const { addReactRefresh } = require('customize-cra-react-refresh');
const {
  override,
  addWebpackAlias,
  addLessLoader,
  overrideDevServer,
  addWebpackPlugin,
  fixBabelImports,
} = require('customize-cra');

module.exports = {
  webpack: override(
    addReactRefresh(),
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
      libraryDirectory: 'lib',
      style: true,
    }),
    addWebpackPlugin(
      new AntdDayjsWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin()
    )
  ),
  devServer: overrideDevServer(devServer),
};
