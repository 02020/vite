[[toc]]


```ts
/**
 * 唯一ID生成器
 * @param {*} prefix
 */
function getUid(prefix) {
  prefix = prefix || 'wgid_'

  return (
    prefix +
    'xxyxxyxx'.replace(/[xy]/g, (c) => {
      let r = (Math.random() * 16) | 0
      let v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  )
}
```

### is

```ts
/** 是否数组 */
function isArray(o) {
  return Object.prototype.toString.call(o) === '[object Array]'
}

/** 是否对象 */
function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]'
}

/** 是否数值 */
function isNumber(o) {
  return Object.prototype.toString.call(o) === '[object Number]'
}

/** 是否字符串 */
function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]'
}

/** 是否已定义 */
function isDefined(o) {
  return o !== undefined && o !== null
}
```

### 是否是JSON字符串
```ts

function isJSONString (str) {
  let result = false;

  if (str && typeof str === 'string') {
    let rvalidchars = /^[\],:{}\s]*$/,
      rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
      rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
      rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
      rbrace = /^(?:\{.*\}|\[.*\])$/;

    // 如果包含空格，IE可能出错
    str = str.replace(/^\s+|\s+$/g, '');

    if (rbrace.test(str)) {
      // Make sure the incoming data is actual JSON
      // borrowed from http://json.org/json2.js
      if (
        rvalidchars.test(
          str
            .replace(rvalidescape, '@')
            .replace(rvalidtokens, ']')
            .replace(rvalidbraces, '')
        )
      ) {
        result = true;
      }
    }
  }

  return result;
}
```

### 判断参数是否是其中之一
```ts
export function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}
```

### 从数组中移除指定数据
```ts
 const remove = (list, id, cb, context = null) => {
        for (let index = 0; index < list.length; index++) {
          const element = list[index]

          if (element.id === id) {
            Reflect.apply(cb, context, [element, list, index])
            list.splice(index, 1)
          }
        }
      }

      const f = function () {
        console.log(...arguments)
      }

      remove(list, 2, f)
```