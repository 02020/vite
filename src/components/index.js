import packageData from '../../package.json'
import { transformCamelCase } from '../utils/index'
import { DEFAULT_IMG_PLACEHOLDER } from '../constants/index'
import useLazyLoadImage from '../composables/useLazyLoadImage'

import VIcon from './icon/index.vue'
import VSwitch from './switch/index.vue'
import VTest from './test/index.vue'
import VJS from './test/js.vue'
import Button from './test/Button.vue'

// components collection (keep router)
const components = {
  VIcon,
  VSwitch,
}

// components collection (skip router)
const skipRouterComponents = {}

// components collection
const componentsCollection = { ...components, ...skipRouterComponents }

// components desc array
const componentsDesc = Object.keys(componentsCollection).map((item) => {
  const component = componentsCollection[item]
  return {
    name: component.name || 'v-comp', // kebab-case
    component
  }
})

// components VUI array for demo showcase
const componentsVUI = Object.keys(components).map((item) => item.slice(1))

// install function
const install = function (app) {
  if (!app || install.installed) {
    return
  }

  componentsDesc.forEach((item) => {
    const kebabCaseName = item.name
    const camelCaseName = transformCamelCase(`-${kebabCaseName}`)
    const registerComponent = item.component
    app.component(kebabCaseName, registerComponent) // kebab-case
    app.component(camelCaseName, registerComponent) // camelCase
  })

  // register global custom directive
  addDirective({
    app,
    defaultImage: DEFAULT_IMG_PLACEHOLDER
  })
}

// add custom directive function
const addDirective = function (config = {}) {
  // register v-lazy directive
  useLazyLoadImage(
    {
      loading: config.defaultImage,
      error: config.defaultImage
    },
    config.app
  )
}

const version = packageData.version

export {
  componentsVUI,
  install,
  addDirective,
  version,
  VIcon,
  VSwitch,
  Button
}
