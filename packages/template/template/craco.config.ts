import CracoLess from 'craco-less';
import CracoAlias from 'craco-alias';

module.exports = {
  plugins: [
    {
      plugin: CracoLess,
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
};
