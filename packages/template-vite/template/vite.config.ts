import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import tsConfigPaths from 'vite-tsconfig-paths';
import { viteMockServe } from 'vite-plugin-mock';

export default defineConfig({
  server:{
    "port":8080
  },
  build: {
    outDir: 'build',
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          hack: `true; @import "src/themes/antd.default.less";`,
        },
      },
    },
  },
  resolve: {
    alias: [{ find: /^~/, replacement: '' }],
  },
  plugins: [
    react(),
    tsConfigPaths(),
    viteMockServe({
      mockPath: 'mockvite',
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: name => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
});