
### getOwnPropertySymbols
```ts
let { x, y, ...params } = geometry

var __hasOwnProperty = Object.prototype.hasOwnProperty
var __getOwnPropertySymbols = Object.getOwnPropertySymbols
var __propertyIsEnumerable = Object.prototype.propertyIsEnumerable
var __assign = Object.assign
var __rest = (source, exclude) => {
  var target = {}
  for (var prop in source)
    if (__hasOwnProperty.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop]
  if (source != null && __getOwnPropertySymbols) {
    for (var prop of __getOwnPropertySymbols(source))
      if (
        exclude.indexOf(prop) < 0 &&
        __propertyIsEnumerable.call(source, prop)
      )
        target[prop] = source[prop]
  }
  return target
}

let { x, y } = geometry,
  params = __rest(geometry, ['x', 'y'])
```
