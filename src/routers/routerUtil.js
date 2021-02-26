import { componentsVUI } from '../components/index'

const componentsMap = {}

componentsVUI.forEach((name) => {
  const routeName = `${name.toLowerCase()}-demo`
  componentsMap[name] = {
    routeName,
    routePath: `/${routeName}`,
    routeComponent: () => import(`../../src/views/${name}Demo.vue`)
  }
})

/**
 * 路由根据组件名获取组件
 * @param {*} name 
 */
export const getRoute = (name) => componentsMap[name]
