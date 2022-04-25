import CracoLess from 'craco-less';
import CracoAlias from 'craco-alias';
import type { CracoConfig } from '@craco/craco';

const config: CracoConfig = {
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

export default config;
