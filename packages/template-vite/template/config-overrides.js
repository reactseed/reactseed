/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const {
  override,
  addWebpackAlias,
  addLessLoader,
  addWebpackPlugin,
  fixBabelImports,
} = require('customize-cra');

module.exports = {
  webpack: override(
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
          hack: `true; @import "src/themes/antd.default.less";`,
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
    addWebpackPlugin(new AntdDayjsWebpackPlugin())
  ),
};
