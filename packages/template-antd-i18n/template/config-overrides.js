/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const devServer = require('@reactseed/devserver');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const {
  override,
  addWebpackAlias,
  addLessLoader,
  overrideDevServer,
  addWebpackPlugin,
  fixBabelImports,
  addBabelPlugin,
  addBabelPreset,
} = require('customize-cra');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const nodeModules = pkg => path.resolve(nodeModulesPath, pkg);

module.exports = {
  webpack: override(
    addBabelPreset('@lingui/babel-preset-react'),
    addBabelPlugin('react-hot-loader/babel'),
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
    addWebpackPlugin(
      new AntdDayjsWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ),
    config => {
      if (config.mode === 'development') {
        config.resolve.alias['react-dom'] = path.resolve(
          __dirname,
          'node_modules/@hot-loader/react-dom'
        );
        config.entry.unshift(nodeModules('react-hot-loader/patch'));
      }
      return config;
    }
  ),
  devServer: overrideDevServer(devServer, config => {
    config.inline = true;
    // eslint-disable-next-line no-undef
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 10000);
    return config;
  }),
};
