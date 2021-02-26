import vue from '@vitejs/plugin-vue'
import resolve from 'path'

export default {
  //to-docs
  alias: [
    {
      find: '/src',
      replacement: resolve(__dirname, 'src')
    }
  ],

  plugins: [
    vue() // for vue plugin
  ],
  base: '/er/', // for base url
  build: {
    outDir: 'dist/er' // npm run serve-build => http://localhost:3000/er/
  },
  server: {
    port: 1122 // for dev mode
  }
}
