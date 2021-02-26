import DemoBlock from '../components/demo/block.vue'
import Demo from '../components/demo/index.vue'
import VJS from '../test/js.vue'

// src 中的组件
import {
  componentsVUI,
  install,
  addDirective,
  version,
  VIcon,
  VSwitch,
  Button
} from '/src/components/index'

export function registerComponents(app) {
  app.component('DemoBlock', DemoBlock)
  app.component('Demo', Demo)

  app.component('e-js', VJS)

  //
  app.component('xl-button', Button)
}
