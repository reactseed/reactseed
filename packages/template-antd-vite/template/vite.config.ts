import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
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
  plugins: [react(), tsConfigPaths(), viteMockServe()],
});
