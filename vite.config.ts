import type { ConfigEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

import {
  viteThemePlugin,
  mixLighten,
  mixDarken,
  tinycolor,
  antdDarkThemePlugin,
} from 'vite-plugin-theme';
import path from 'path';
import { getThemeColors, generateColors, generateModifyVars } from './config/themeConfig';

function createThemePlugin(isBuild: boolean) {
  const colors = generateColors({
    mixDarken,
    mixLighten,
    tinyColor: tinycolor,
  });

  const plugin = [
    viteThemePlugin({
      resolveSelector: (s) => `[data-theme] ${s}`,
      colorVariables: [...getThemeColors(), ...colors],
    }),
    antdDarkThemePlugin({
      preloadFiles: [
        path.resolve(process.cwd(), 'node_modules/ant-design-vue/dist/antd.less'),
        path.resolve(process.cwd(), 'src/theme/index.less'),
      ],
      filter: (id) => (isBuild ? !id.endsWith('antd.less') : true),
      darkModifyVars: {
        ...generateModifyVars(true),
        'text-color': '#c9d1d9',
        'text-color-base': '#c9d1d9',
        'component-background': '#151515',
        // black: '#0e1117',
        // #8b949e
        'text-color-secondary': '#8b949e',
        // 'border-color-base': '#30363d',
        // 'border-color-split': '#30363d',
        'item-active-bg': '#111b26',
        'app-content-background': 'rgb(255 255 255 / 4%)',
      },
    }),
  ];

  return plugin;
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  return {
    base: isBuild ? '/vue-boilerplate/' : '/',
    resolve: {
      alias: [
        { find: /^\/@\//, replacement: '/src/' },
        { find: /^~/, replacement: '' },
      ],
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://rap2api.taobao.org/app/mock/286147/',
          changeOrigin: true,
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      vue(),
      ...createThemePlugin(isBuild),
      styleImport({
        libs: [
          {
            libraryName: 'ant-design-vue',
            esModule: true,
            resolveStyle: (name) => {
              return `ant-design-vue/es/${name}/style/index`;
            },
          },
        ],
      }),
    ],
  };
};
