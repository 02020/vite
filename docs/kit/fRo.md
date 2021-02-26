---
title: fR
---

::: tip fR
处理对象
:::

[[toc]]

## 源码

```ts
const kit = {
  // 对象
  fRo: (f, initial = {}) => (o) => {
    const fn = (acc, key, i) => _.value(acc, key, f(key, o[key], i, acc, o), i)
    return Object.keys(o).reduce(fn, initial)
  }
}
```

## 示例 1.构建请求

### 数据

```ts
const URL = {
  jzr: '/gisBoot/ct/zcgl/wx/jzr/',
  pay: '/gisBoot/ct/zcgl/wx/pay/'
}

const urlList = [
  ['get', 'delJZRByIds', URL.jzr, '删除居住人信息'],
  ['post', 'createOrder', URL.pay, '并组装所需支付参数']
]
```

### 应用

```ts
const success = (res) => console.log('成功', res)
const fail = ({ success, message }) => console.error(message)

// 应用方式1
api('createOrder', params, success, fail)
// 应用方式2
api.createOrder(params).then(success, fail)
```

### 代码

```ts
const aipToC = (vm) => (item) => {
  const [op, _key, url] = item
  // const http = vm.prototype.$u.http
  const http = {}
  let key = kit.repeat(_key)
  const fn = (params = {}) => {
    if (typeof params === 'string') {
      return http[op](url + key[0] + '/' + params)
    } else {
      return http[op](url + key[0], params)
    }
  }
  return [key[1], fn]
}
// 声明变量: api
const api = (name, params, success, fail) =>
  api[name](params).then(success, fail)
// 直接修改api的值
kit.fR(aipToC('Vue'), api)(urlList)

console.log(api)
```

<hr>

## 示例 2.
