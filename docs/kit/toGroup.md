---
title: v1
---

::: tip
This is a tip
:::

[[toc]]

## 源码

```ts
kit.toGroup = (key) =>
  kit.fRa((item, index, acc) => {
    const group = item[key] || ''

    const initial = Array.isArray(acc[group]) ? acc[group] : []
    initial.push(item)

    return [group, initial]
  })
```

## 实例 1.数组分组编号

```ts
// 数据
const list = [
  { key: 'a1', b: '1', c: '11' },
  { key: 'a2', b: '2', c: '22' },
  { key: 'a3', b: '3', c: '33' },
  { key: 'a1', b: '4', c: '44' },
  { key: 'a1', b: '5', c: '55' }
]
// 结果
const resp = [
  { key: 'a1', b: '1', c: '11', num: 'a1_1' },
  { key: 'a2', b: '2', c: '22', num: 'a2_1' },
  { key: 'a3', b: '3', c: '33', num: 'a3_1' },
  { key: 'a1', b: '4', c: '44', num: 'a1_2' },
  { key: 'a1', b: '5', c: '55', num: 'a1_3' }
]
```

### 代码

```ts
const toArray = (key, item, index, acc) => {
  return { count: item.length, current: 0 }
}
let temp = kit.toGroup('key')(list)
temp = kit.fR(toArray, {})(temp)

list.forEach((x) => {
  let o = temp[x['key']]
  x['num'] = x['key'] + '_' + ((x['num'] || 1) + o.current++)
})

console.log(list)
```

## 示例 2. 分组

```ts
// 构建 { text:'', link:'' }
const toChild = (path = '') =>
  kit.fR((item, i, acc, o) => {
    const keys = kit.repeat(item)
    return { text: keys[0], link: path + keys[1] }
  }, [])

// 构建 { text:'', children:[] }
const toChildren = (path) => (key, item, index, acc) => {
  return {
    text: key,
    children: toChild(path)(item.map((x) => x[1]))
  }
}
// 分组
const toGroup = (path) => (list) => {
  let temp = kit.toGroup(0)(list)
  return kit.fR(toChildren(path), [])(temp)
}
```

```ts
const resp = toGroup('/shared/')([
  ['js', 'Array'],
  ['js', 'dom'],
  ['js', 'es6'],
  ['third', 'Jquery'],
  ['js', 'localStorage'],
  ['js', 'Map'],
  ['js', 'Object'],
  ['lib', 'onion'],
  ['third', 'R'],
  ['js', 'String'],
  ['lib', 'Utils'],
  ['third', 'vue']
])
```
