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
  addBabelPlugin,
} = require('customize-cra');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const nodeModules = pkg => path.resolve(nodeModulesPath, pkg);

module.exports = {
  webpack: override(
    addReactRefresh(),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#006EFF',
        },
      },
    }),
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    }),
    fixBabelImports('antd', {
      libraryDirectory: 'lib',
      style: 'css',
    }),
    addWebpackPlugin(
      new AntdDayjsWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin()
    )
  ),
  devServer: overrideDevServer(devServer)
};
