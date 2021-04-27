import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from "vite-plugin-imp"

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
      vue(),
      vitePluginImp({
        libList: [
          {
            libName: 'ant-design-vue',
            style(name) {
              if (/popconfirm/.test(name)) {
                // support multiple style file path to import
                return [
                  'ant-design-vue/es/button/style/index.css',
                  'ant-design-vue/es/popover/style/index.css'
                ]
              }
              return `ant-design-vue/es/${name}/style/index.css`
            }
          }
        ]
      })
  ],
})
