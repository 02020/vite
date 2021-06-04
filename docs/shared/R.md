## 暂存
```ts
import * as R from 'ramda/es'

/**
 *
 * @param pairs
 * @param keyList
 * @param label 打印错误的中提示词
 */
const eqKeys = (keyList, label = '') => (pairs) => {
  let flag = true
  R.map((x) => {
    // 获取键值数组中的第一个值
    const list = R.map(R.head())(keyList)
    const _flag = R.contains(x, list)
    if (!_flag) {
      flag = _flag
      console.error(`[${label}]:中需要[${x}]关键字`)
    }
  })(R.keys(pairs))

  return flag
}

export { eqKeys, R }
```
