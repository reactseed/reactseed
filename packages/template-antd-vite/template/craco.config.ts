import CracoLess from 'craco-less';
import CracoAlias from 'craco-alias';
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';

module.exports = {
  plugins: [
    {
      plugin: CracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              hack: `true; @import "@/themes/antd.default.less";`,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './',
        tsConfigPath: './tsconfig.json',
      },
    },
  ],
  webpack: {
    plugins: {
      add: [new AntdDayjsWebpackPlugin()],
    },
  },
  babel: {
    plugins: [['import', { libraryName: 'antd', style: true }]],
  },
};
