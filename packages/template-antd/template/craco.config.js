const CracoLessPlugin = require('craco-less');
const CracoAlias = require('craco-alias');
/**
 * @type {import('@craco/craco').CracoConfig}
 */
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
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
        tsConfigPath: './tsconfig.extend.json',
      },
    },
  ],
};