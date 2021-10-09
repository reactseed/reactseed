import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import svgr from 'vite-plugin-svgr';
import styleImport from 'vite-plugin-style-import';
import react from '@vitejs/plugin-react';

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig(params => {
  const defaultMode = 'development';
  process.env = {
    ...process.env,
    ...loadEnv(params.mode || defaultMode, process.cwd()),
  };
  return {
    resolve: {
      alias: [
        { find: /^~/, replacement: '' },
        {
          find: /@\//,
          replacement: `${pathResolve('src')}/`,
        },
      ],
    },
    optimizeDeps: {
      include: ['@ant-design/icons'],
    },
    define: {
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
    },
    server: {
      port: Number(process.env.VITE_PORT || 3099),
      fs: {
        allow: ['..'],
        strict: false,
      },
      proxy: {
        '/api': {
          target: 'https://randomuser.me/api',
          secure: false,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
          bypass: (req, res) => {
            console.log('vite mock: ', req.url);
          },
        },
      },
    },
    plugins: [
      react(),
      svgr(),
      viteMockServe({
        mockPath: 'mock',
        supportTs: true,
        watchFiles: true,
        localEnabled: true,
        logger: true,
      }),
      styleImport({
        libs: [
          {
            libraryName: 'antd',
            esModule: true,
            resolveStyle: name => `antd/es/${name}/style/index`,
          },
        ],
      }),
    ],
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            hack: 'true; @import "src/themes/antd.default.less";', // Override antd
          },
        },
      },
    },
  };
});
