import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import vitePluginImp from 'vite-plugin-imp';
import { viteMockServe } from 'vite-plugin-mock';

export default defineConfig({
  resolve: {
    alias: [{ find: /^~/, replacement: '' }],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        changeOrigin: true,
      },
    },
  },
  plugins: [react(), tsConfigPaths(), vitePluginImp(), viteMockServe()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          hack: `true; @import "${path.resolve(
            'src/themes/antd.default.less'
          )}";`,
        },
      },
    },
  },
});
