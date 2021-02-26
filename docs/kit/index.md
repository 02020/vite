---
title: Index
---

[[toc]]

## fR

```ts
// 对象
const fo = (key, val, i, acc, o) => {}
// 数组
const fa = (item, i, acc, o) => {}
```

## key

### keysTo

```ts
const list = [[image, '缴费提醒', '您本月应缴费信息提醒', '8:35', 2]]
const keys = ['src', 'title', 'sub', 'topRight', 'num']
keysTo(keys)(list)
```
