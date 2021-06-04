## 数据合并

### 数据

```ts
const pairs1 = {
  key1: 'a1',
  value1: '1'
}

const pairs2 = {
  key2: 'a2',
  value2: '2'
}

const fc = (arg1, arg2) => {
  return { [arg1]: arg2 }
}

const list = [
  [pairs1, ['key1', 'value1'], ['k1', 'v1']],
  [pairs2, ['key2', 'value2'], ['k2', 'v2']],
  [fc, 'arg1', 'arg2']
]

// { "k1": "a1", "v1": "1", "k2": "a2", "v2": "2", "arg1": "arg2" }
const resp = toCombine(list)
```

### 函数

```ts
// 数据合并
const toCombine = (list) => {
  const isFunction = (val) => typeof val === 'function'

  const propC = (source) => (key, target) => {
    if (Array.isArray(key)) {
      return key.reduce((acc, curr, index) => {
        acc[target[index]] = source[curr]
        return acc
      }, {})
    } else {
      return { target: source[key] }
    }
  }

  return list.reduce((acc, curr) => {
    let t
    const f = curr[0]
    if (isFunction(f)) {
      t = curr.shift(f).apply(f, curr)
    } else {
      const [source, key, target] = curr
      t = propC(source)(key, target)
    }

    return { ...acc, ...t }
  }, {})
}
```

```ts
this.filterList = this.assetlist.filter(
  (x) =>
    (!!this.roomNo ? x.roomNo == this.roomNo : true) &&
    (!!this.buildingNo ? x.buildingNo === this.buildingNo : true)
)
```
