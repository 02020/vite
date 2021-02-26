// import DefaultTheme from 'vitepress/dist/client/theme-default/index'

import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import kit from '/src/kit'
import { registerComponents } from './register-components'

// 添加至全局
globalThis.kit = kit

export default {
  Layout: DefaultTheme.Layout,
  NotFound: DefaultTheme.NotFound, // <- this is a Vue 3 functional
  enhanceApp({ app, router, siteData }) {
    registerComponents(app)
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  }
}
