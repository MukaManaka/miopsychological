/*
 * @Author: MIO
 * @Date: 2025-11-12 20:40:51
 * @LastEditors: MIO
 * @LastEditTime: 2025-11-19 21:28:44
 * @FilePath: \MioPsychological\miopsychological\vite.config.js
 * @Description: 
 * @
 * @Copyright (c) 2025 by MIO, All Rights Reserved. 
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],

  base :'/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
