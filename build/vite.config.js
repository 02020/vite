const path = require('path')

export default {
  plugins: [],
  build: {
    target: 'es2015',
    outDir: './docs/dist',
    minify: 'false',
    lib: {
      name: 'kit',
      entry: path.resolve(__dirname, '../src/kit/index.js'),
      formats: ['es']
    }
  }
}
