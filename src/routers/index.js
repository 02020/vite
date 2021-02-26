import { createRouter, createWebHashHistory } from 'vue-router'
import { componentsVUI } from '../components/index'
import { getRoute } from './routerUtil'

import Home from '../views/IndexDemo.vue'
import Demo from '../demo/main.vue'
import JS from '../demo/js.vue'

const routes = [
  {
    path: '/o',
    name: 'index-demo',
    components: { default: Home }
  },
  {
    path: '/',
    name: 'demo',
    components: { default: Demo }
  },
  {
    path: '/js',
    name: 'js',
    components: { default: JS }
  }
]

componentsVUI.forEach((name) => {
  const item = getRoute(name) || {}
  routes.push({
    path: item.routePath,
    name: item.routeName,
    component: item.routeComponent
  })
})

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
