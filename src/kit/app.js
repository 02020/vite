import { fromPairs, pairs } from './seconds.js'
import { fR, fRa } from './kit.js'

/**
 * 应用-分组
 * @param {string} key 分组字段
 * @demo
 * const toArray = (key, item, index, acc) => item;
 * temp = toGroup('group')(temp);
 * fR(toArray, [])(temp);
 */
const toGroup = (key) =>
  fRa((item, index, acc) => {
    const group = item[key] || ''

    const initial = Array.isArray(acc[group]) ? acc[group] : []
    initial.push(item)

    return [group, initial]
  })

/**
 * 7 个参数
 * [ ['label', 'name','value', 'tip', 'visible', 'group', 'class' ] ]
 * @param {*} info
 */
const toFormItems = (config, filters = []) => {
  // 转换成键值对
  const __pairs = ['label', 'name', 'value', 'tip', 'visible', 'group', 'class']
  const __filters = fromPairs(filters)
  const fn = (info) => (item, i, acc, o) => {
    const __item = Array.isArray(item) ? pairs(__pairs, item) : { ...item }
    const { value, name } = __item
    const filter = __filters[name]
    __item.value = !!filter ? filter(value, info, name) : info[name] || value
    return __item
  }
  return (info) => fR(fn(info), [])(config)
}

export { toGroup, toFormItems }
