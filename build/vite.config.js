import vue from '@vitejs/plugin-vue'

const path = require('path')

export default {
  plugins: [
    vue() // for vue plugin
  ],
  build: {
    outDir: './docs/dist',
    minify: 'esbuild',
    lib: {
      entry: path.resolve(__dirname, '../src/kit/index.js'),
      name: 'kit',
      formats: ['es']
    }
  }
}