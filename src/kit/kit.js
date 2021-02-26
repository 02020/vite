// 内部使用
const _ = {
  // 值判断
  value: (acc, key, value, i) => {
    if (Array.isArray(acc)) {
      acc[i] = value
      return acc
    } else if (Array.isArray(value) && value.length === 2) {
      acc[value[0]] = value[1]
    } else if (value != undefined) {
      // 不改变原key
      acc[key] = value
    }
    return acc
  }
}

/**
 * 空函数
 */
export const noop = () => {}

/**
 * 返回参数本身
 * @param {*} x
 */
export const fr = (x) => x

/**
 * 对输入的值执行给定的函数，然后返回输入的值。
 * const sayX = x => console.log('x is ' + x);
   R.tap(sayX, 100); //=> 100
 */
export const tap = (...args) => {
  console.log(args)
  return args
}

/**
 * 从右到左执行函数组合
 */
export const o = (f) => (g) => (x) => f(g(x))

export const of = (x, flag = true) => (flag ? [x] : x)

/**
 * 删除对象中给定的 keys 对应的属性。
 * R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
export const omit = () => {}

/**
 * 取出对象中指定属性的值。如果不存在，则返回 undefined。
 * R.prop('x', {x: 100}); //=> 100
 * R.prop('x', {}); //=> undefined
 * R.prop(0, [100]); //=> 100
 */
export const prop = () => {}
/**
 * 判断是否是数组
 * @param {*} f
 * @param {*} list
 */
export const fMapArray = (f, list) =>
  Array.isArray(list) ? list.map(f) : f(list)

/**
 *
 * @param {*} keys
 */
export const keysC = (keys) => (arr) =>
  keys.reduce((acc, item, i) => ((acc[item] = arr[i]), acc), {})

/**
 * 数组
 * const fa = (item, i, acc, o) => {}
 * @param {*} f
 * @param {*} initial
 */
export const fRa = (f, initial = {}) => (o) => {
  const fn = (acc, item, i) => _.value(acc, item, f(item, i, acc, o), i)
  return o.reduce(fn, initial)
}
/**
 * 对象
 * const fo = (key, val, i, acc, o) => {}
 * @param {*} f
 * @param {*} initial
 */
export const fRo = (f, initial = {}) => (o) => {
  const fn = (acc, key, i) => _.value(acc, key, f(key, o[key], i, acc, o), i)
  return Object.keys(o).reduce(fn, initial)
}

/**
 * 入口
 * @param {*} f
 * @param {*} initial
 * @example
 */
export const fR = (f, initial = {}) => (o) =>
  Array.isArray(o) ? fRa(f, initial)(o) : fRo(f, initial)(o)

/**
 *
 * @param {*} keys
 * @example
 */
export const keysTo = (keys) => fMap(keysC(keys))

/**
 * 执行map
 * @param {*} f
 * @param {*} cb
 */
export const fMap = (f, cb = fr) => (list) => cb(fMapArray(f, list), list)

// 未定名
export const fxC = (fnC) => (key, value) => [key, () => fMap(fnC)(value)]
/**
 * 将两个数组中的对象各自合并
 * @param {*} source
 * @param {*} target
 */
export const mergeArray = (source, target) =>
  source.map((x, index) => {
    return Object.assign({}, x, target[index])
  })

/**
 * 生成包含 n 个同一元素的数组。
 * @param {*} arr 默认数组
 * @param {*} len 新数组长度
 */

export const repeat = (arr, len = 2) => {
  let resp = []
  if (Array.isArray(arr) && arr.length === len) {
    resp = arr
  } else {
    const init = Array.isArray(arr) && arr.length === 1 ? arr[0] : arr
    for (let index = 0; index < len; index++) {
      resp[index] = init
    }
  }
  return resp
}
