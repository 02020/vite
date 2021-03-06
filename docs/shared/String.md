[[toc]]

### replace

```ts
.replace(/[/g,'').replace(/]/g,'')
```

### 首字母大小

```ts
// firstUpperCase
function firstUpperCase(str) {
  return str.toString()[0].toUpperCase() + str.toString().slice(1)
}
```

### 驼峰转成->连字符

```ts
export function camelCaseToHyphen(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
```
### 连字符->驼峰
```ts
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/
function camelCase(name) {
  return name
    .replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter
    })
    .replace(MOZ_HACK_REGEXP, 'Moz$1')
}
```

### slice

```ts
stringObject.slice(start, end)
```

start（必需）：规定从何处开始选取。如果是负数，那么它规定从字符串尾部开始算起的位置。也就是说，-1 指最后一个字符，-2 指倒数第二个字符，以此类推。
end（可选）：规定从何处结束选取，即结束处的字符下标。如果没有指定该参数，那么截取的字符串包含从 start 到结束的所有字符。如果这个参数是负数，那么它规定的是从数组尾部开始算起的字符。

```ts
var str = '0123456789'
log('原始字符串：', str)
log('从索引为3的字符起一直到结束：', str.slice(3)) //3456789
log('从倒数第3个字符起一直到结束：', str.slice(-3)) //789

log('从开始一直到索引为5的前一个字符：', str.slice(0, 5)) //01234
log('从开始一直到倒数第3个字符的前一个字符：', str.slice(0, -3)) //0123456
log('从索引为3的字符起到索引为5的前一个字符：', str.slice(3, 5)) //34
log('从索引为3的字符起到倒数第3个字符的前一个字符：', str.slice(3, -3)) //3456
```

### substr

`stringObject.substr(start, length)`
start（必需）：所需的子字符串的起始位置。字符串中的第一个字符的索引为 0。
length（可选）：在返回的子字符串中应包括的字符个数。

```ts
var str = '0123456789'
log('原始字符串：', str)

log(str.substr(3)) // 从索引为3的字符起一直到结束：3456789
log(str.substr(20)) //

log(str.substr(3, 5)) // 从索引为3的字符起截取长度为5的字符串：34567
log(str.substr(3, 20)) // 3456789
```
