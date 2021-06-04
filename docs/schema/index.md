```ts
toButtons({
  class: 'flex justify-center space-x-10 px-10 py-4'
})([
  { name: 'analyze', text: '分析', long: true },
  { name: 'export', text: '导出', long: true }
])

menuSchema = toButtons({
  class: 'flex justify-center space-x-3 py-2',
  on(key) {
    ctx.emit('cmd', key)
  }
})(schema.Buttons)

toButtons({
  class: 'mt-3 flex space-x-3  justify-end'
})([
  { name: 'a', text: '导出数据包', type: 'primary' },
  { name: 'b', text: '提交外网', type: 'primary' }
])

toButtons({
  class: 'flex justify-center space-x-3 mt-3',
  on: (key) => {
    this.on(key, value)
  }
})(this.btns)
```
