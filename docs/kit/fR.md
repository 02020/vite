---
title: fR
---

[[toc]]

#### 对象入参

```ts
const fo = (key, val, i, acc, o) => {}
```

#### 数组入参

```ts
const fa = (item, i, acc, o) => {}
```

## 源码

### fR

```ts
const kit = {
  // 入口
  fR: (f, initial = {}) => (o) =>
    Array.isArray(o) ? kit.fRa(f, initial)(o) : kit.fRo(f, initial)(o),
  // 数组
  fRa: (f, initial = {}) => (o) => {
    const fn = (acc, item, i) => _.value(acc, item, f(item, i, acc, o), i)
    return o.reduce(fn, initial)
  },
  // 对象
  fRo: (f, initial = {}) => (o) => {
    const fn = (acc, key, i) => _.value(acc, key, f(key, o[key], i, acc, o), i)
    return Object.keys(o).reduce(fn, initial)
  }
}
```

### kit 内部使用

```ts
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
```

## 应用

```ts
const toPairs = kit.fR((item) => [item[0], item[1]])
const toPairs1 = kit.fR((item) => [item[1], item[0]])

initialValue[index]
  ? initialValue[index].push(node)
  : (initialValue[index] = [node])
```

```ts
const val = _.schema.reduce((acc: any, cur: any) => {
  // 1212 增加空值判断
  console.log(cur.name)
  acc[cur.name] = _.value[cur.name] || cur.value
  return acc
}, {})

const val = kit.fR((item: any) => [
  item.name,
  _.value[item.name] || item.value
])(_.schema)
```
