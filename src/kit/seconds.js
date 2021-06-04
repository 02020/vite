/**　lambda - start
________________________________________________________________________________
*/
/**
 * compact - 过滤掉数组中所有假值元素
 * @param {*} arr
 * @returns
 */
export const compact = arr => arr.filter(Boolean);


/**
 * compose - 函数式编程术语：函数组合
 * 执行从右到左的函数组合。
 * @param  {...any} fns 7
 */
export const compose = (...fns) =>
  fns.reduce((f, g) => (...args) => f(g(...args)))

/**
 * pipeFunctions - 执行从左到右的函数组合
 * @param  {...any} fns
 */
export const pipe = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))

/**
 * curry - 函数式编程术语：柯里化
 * 柯里化一个函数。
 * @param {*} fn
 * @param {*} arity
 * @param  {...any} args
 */
export const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args)
/**
   * spreadOver - 将参数数组映射到该函数的输入
   * @param {*} fn
   * @example
   * const arrayMax = spreadOver(Math.max);
     arrayMax([1, 2, 3]); // 3
   */
export const spreadOver = (fn) => (argsArr) => fn(...argsArr)

// apply: Reflect.apply(Math.max, Math, ages)
/**
 * promisify - 柯里化一个 Promise 函数
 * @param {*} func
 * @example
 *
 */
export const promisify = (func) => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  )

/**　lambda - end
________________________________________________________________________________
*/

export const head = (arr) => arr[0]
/**
 * 合并键&值
 * @param {*} keys
 * @param {*} values
 */
export const pairs = (keys, values) =>
  keys.reduce((acc, key, index) => ((acc[key] = values[index]), acc), {})
/**
 * pick - 提取
 * @param {*} arr
 * @example pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }
 */
export const pick = (arr) => (obj) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {})
/**
 *  invertKeyValues - 反转对象的键值对
 * @param {*} obj
 * @example invertKeyValues({ name: 'John', age: 20 }); // { 20: 'age', John: 'name' }
 */
export const invertKeyValues = (obj) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[obj[key]] = key
    return acc
  }, {})

/**
 * objectFromPairs - 根据键值对创建对象
 * @param {*} arr
 * @example fromPairs([['a', 1], ['b', 2]]); // {a: 1, b: 2}
 */
export const fromPairs = (arr) =>
  arr.reduce((a, v) => ((a[v[0]] = v[1]), a), {})
/**
 * objectToPairs - 对象转化为键值对
 * @param {*} obj
 * @example toPairs({ a: 1, b: 2 }); // [['a',1],['b',2]]
 */
export const toPairs = (obj) => Object.keys(obj).map((k) => [k, obj[k]])

/**
 * merge - 合并对象
 * @param  {...any} objs
 */
export const merge = (...objs) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k)
          ? [].concat(acc[k]).concat(obj[k])
          : obj[k]
        return acc
      }, {}),
    {}
  )
/**
 * once - 确保函数只被调用一次
 * @param {*} fn
 * @example
 */
export const once = (fn) => {
  let called = false
  return function (...args) {
    if (called) return
    called = true
    return fn.apply(this, args)
  }
}
/**
 * remove - 移除数组中的元素
 * 从数组中移除函数为真的元素。
 * @param {*} arr
 * @param {*} func
 * @param {*} cb
 * @example
 */
export const remove = (arr, func, cb) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val, index) => {
        Reflect.apply(cb, null, [val, arr, index])
        arr.splice(arr.indexOf(val), 1)
        return acc.concat(val)
      }, [])
    : []

/**
 * countBy - 返回每个分组数组中元素的数量
 * @param {*} arr
 * @param {*} fn
 */
export const countBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : (val) => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || 0) + 1
      return acc
    }, {})

/**
 * groupBy - 数组分组
 * @param {*} arr
 * @param {*} fn
 */
export const groupBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : (val) => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i])
      return acc
    }, {})

/**
 * orderBy - 排序对象数组
 * @param {*} arr
 * @param {*} props
 * @param {*} orders
 * @example orderBy(users, ['name', 'age'], ['asc', 'desc']);
 */
export const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === 'desc'
            ? [b[prop], a[prop]]
            : [a[prop], b[prop]]
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0
      }
      return acc
    }, 0)
  )
/**
 * round - 精确的几位小数
 * @param {*} n
 * @param {*} decimals
 * @example round(1.005, 2); // 1.01
 */
export const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
/**
 * sumBy - 根据函数映射每个元素，然后返回数组的和
 * @param {*} arr
 * @param {*} fn
 * @example
 * sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 20
 * sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 20
 */
export const sumBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : (val) => val[fn])
    .reduce((acc, val) => acc + val, 0)

/**
   * select - 选择对象中的属性值
   * @param {*} from
   * @param  {...any} selectors
   * @example const obj = { selector: { to: { val: 'val to select' } } };
              select(obj, 'selector.to.val'); // ['val to select']
              select(obj, 'selector.to.val', 'selector.to'); // ['val to select', { val: 'val to select' }]
    */
export const select = (from, ...selectors) =>
  [...selectors].map((s) =>
    s.split('.').reduce((prev, cur) => prev && prev[cur], from)
  )

/**
 * zip - 创建一个分组元素数组
 * @param  {...any} arrays
 * @example zip(['a'], [1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]
 */
export const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map((x) => x.length))
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i])
  })
}
/**
   * zipObject - 创建一个属性关联到值的对象
   * @param {*} props
   * @param {*} values
   * @example
   * zipObject(['a', 'b', 'c'], [1, 2]); // {a: 1, b: 2, c: undefined}
     zipObject(['a', 'b'], [1, 2, 3]); // {a: 1, b: 2}
    */
export const zipObject = (props, values) =>
  props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {})

/**
 * timeTaken - 计算函数执行所花费的时间
 * @param {*} callback
 * @example timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
 */
export const timeTaken = (callback) => {
  console.time('timeTaken')
  const r = callback()
  console.timeEnd('timeTaken')
  return r
}

/**
 * getURLParameters - 网址参数
 * @param {*} url
 * @example getURLParameters('http://url.com/page?name=Adam&surname=Smith'); // {name: 'Adam', surname: 'Smith'}
 */
export const getURLParameters = (url) =>
  url
    .match(/([^?=&]+)(=([^&]*))/g)
    .reduce(
      (a, v) => (
        (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
      ),
      {}
    )
