---
title: fR
---

::: tip fR

:::

[[toc]]

## 源码

```ts
const kit = {
  fRa: (f, initial = {}) => (o) => {
    const fn = (acc, item, i) => _.value(acc, item, f(item, i, acc, o), i)
    return o.reduce(fn, initial)
  }
}
```

## 示例 1. 数组转成对象

### 应用

```ts
const list = [['fR'], ['fRo', '对象'], ['fRa', '数组']]

const resp = toChild('/kit-v1/')(list)
const resp = [
  { text: 'fR', link: '/kit-v1/fR' },
  { text: 'fRo', link: '/kit-v1/对象' },
  { text: 'fRa', link: '/kit-v1/数组' }
]
```

### 函数

```ts
const toChild = (path) =>
  kit.fR((item, i, acc, o) => {
    const keys = kit.repeat(item)
    return { text: keys[0], link: path + keys[1] }
  }, [])
```

## 示例 2.赋值=>根据数组 & 对象

### 应用

```ts
// 以config的key为准
const config = [
  // label, key, value
  ['名称', 'A'],
  ['地址', 'B'],
  ['联系人', 'C'],
  ['联系电话', 'D']
]

const info = {
  A: '**A**',
  B: '**B**',
  C: '**C**',
  D: '**D**',
  E: '**E**'
}

const resp = toInfoValue(info)(config)
const resp = [
  { label: '名称', key: 'A', value: '**A**' },
  { label: '地址', key: 'B', value: '**B**' },
  { label: '联系人', key: 'C', value: '**C**' },
  { label: '联系电话', key: 'D', value: '**D**' }
]
```

## 函数

```ts
const toInfoValue = (info) =>
  kit.fR(
    (item, i, acc, o) => ({
      label: item[0],
      key: item[1],
      value: info[item[1]]
    }),
    []
  )
```

## 示例 3.赋值=>根据对象 & 数组

### 应用

```ts
const config = [
  // label, key, value
  ['名称', 'A'],
  ['地址', 'B'],
  ['联系人', 'C'],
  ['联系方式', 'D'],
  ['姓名', 'E']
]
// 以info的key为准
const info = { A: '_A_', B: '_B_', C: '_C_', D: '_D_' }

const resp = toInfo(config)(info)

const resp = [
  { label: '名称', key: 'A', value: '_A_' },
  { label: '地址', key: 'B', value: '_B_' },
  { label: '联系人', key: 'C', value: '_C_' },
  { label: '联系方式', key: 'D', value: '_D_' }
]
```

## 函数

```ts
const toInfo = (config) => {
  const info = kit.fR((item) => [item[1], item[0]])(config)

  return kit.fR((key, value) => ({ label: info[key], key, value }), [])
}
```

## 示例 4.

### 应用

```ts

```

## 函数

```ts

```
