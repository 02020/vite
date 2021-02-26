//  来至30s
const kit = {
  pipe: (f, g) => (...args) => g(f(...args)),
  compose: (f, g) => (...args) => f(g(...args)),
  fromPairs: (arr) => arr.reduce((a, v) => ((a[v[0]] = v[1]), a), {}),
  toPairs: (obj) => Object.keys(obj).map((k) => [k, obj[k]]),
  checkTruth: (collection, pre) => collection.every((obj) => obj[pre]),
  mapKeys: (obj, fn) =>
    Object.keys(obj).reduce((acc, k) => {
      acc[fn(obj[k], k, obj)] = obj[k];
      return acc;
    }, {}),
  // 新增
  keysMap: (keys0, keys1) => (obj) =>
    keys0.reduce(
      (acc, curr, i) => (
        curr in obj && (acc[keys1[i] || curr] = obj[curr]), acc
      ),
      {}
    ),
  pick: (arr) => (obj) =>
    arr.reduce(
      (acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc),
      {}
    ),
  groupBy: (arr, fn) =>
    arr
      .map(typeof fn === 'function' ? fn : (val) => val[fn])
      .reduce((acc, val, i) => {
        acc[val] = (acc[val] || []).concat(arr[i]);
        return acc;
      }, {}),
  orderBy: (arr, props, orders) =>
    [...arr].sort((a, b) =>
      props.reduce((acc, prop, i) => {
        if (acc === 0) {
          const [p1, p2] =
            orders && orders[i] === 'desc'
              ? [b[prop], a[prop]]
              : [a[prop], b[prop]];
          acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
        }
        return acc;
      }, 0)
    ),
};
/**
 *
 *
 * @param {*} x
 */
const MapBox = (x) => ({
  /*
   * 操作数组-begin
   */
  map: (f) => MapBox(x.map(f)),

  filter: (f) => MapBox(x.filter(f)),
  nth: (n) => MapBox(x.map((a) => a[n])),
  // 拾取
  pick: (keys) => {
    const f = kit.pick(keys);
    return MapBox(x.map(f));
  },
  // 根据键值对创建对象
  fromPairs: () => MapBox(x.map(kit.fromPairs)),
  // 对象转化为键值对
  toPairs: () => MapBox(x.map(kit.toPairs)),
  // 判断是否是数组
  isArray: () =>
    MapBox(Array.isArray(x) ? x : (console.error('值异常:', x), x)),

  checkTruth: (pre) =>
    MapBox(kit.checkTruth(x, pre) ? x : (console.error('值异常:', x), null)),
  // 键值映射
  keysMap: (keys0, keys1) => {
    const f = kit.keysMap(keys0, keys1);
    return MapBox(x.map(f));
  },
  //
  mapKeys: (f) => kit.mapKeys(x, f),
  // 分组
  groupBy: (f) => MapBox(kit.groupBy(x, f)),
  //
  pipe: (...fns) => fns.reduce(kit.pipe)(x),
  //
  compose: (...fns) => fns.reduce(kit.compose)(x),
  orderBy: (props, orders) => MapBox(kit.orderBy(x, props, orders)),

  /*
   * 操作数组-end
   */

  /*
   * 操作对象-begin
   */

  /*
   * 操作对象-end
   */

  // Flatten
  // 结束嵌套
  fold: (f) => x.map(f),
  value: () => x,
  tap: () => (console.log(x), x),
});

export { MapBox, kit };

export default MapBox;
