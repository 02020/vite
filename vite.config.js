const { resolve } = require('path')
const vue = require('@vitejs/plugin-vue')

module.exports = {
  // to-docs
  alias: [
    {
      find: '/src',
      replacement: resolve(__dirname, 'src')
    }
  ],
  // root: resolve(__dirname, 'playground'),
  plugins: [vue()],
  base: '/er/',
  build: {
    outDir: 'dist/er'
  },
  server: { port: 1122 },

  vueCompilerOptions: {
    isCustomElement: (tag) => /^x-/.test(tag)
  }
}
