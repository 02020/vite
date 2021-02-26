// import vue from '@vitejs/plugin-vue'

const { resolve } = require('path')
const vue = require('@vitejs/plugin-vue')

module.exports = {
  //to-docs
  alias: [
    {
      find: '/src',
      replacement: resolve(__dirname, 'src')
    }
  ],
  // root: resolve(__dirname, 'playground'),
  plugins: [
    vue() // for vue plugin
  ],
  base: '/er/', // for base url
  build: {
    outDir: 'dist/er' // npm run serve-build => http://localhost:3000/er/
  },
  server: {
    port: 1122 // for dev mode
  },

  vueCompilerOptions: {
    isCustomElement: tag => /^x-/.test(tag)
  }
}
