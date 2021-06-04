

## toButtons

```ts
// 单个按钮
Button({
  key: 'd',
  size: 'small',
  text: '下载',
  on: {
    click: () => on(params)
  }
})

// 多个按钮
const btns = toButtons({
  class: 'flex justify-center space-x-3'
})([
  { key: 'a', text: '按钮1', type: 'primary' },
  { key: 'b', text: '按钮2', type: 'success' },
  { key: 'c', text: '按钮3', type: 'error' }
])

toButtons({
  class: 'flex justify-center space-x-3 mt-4'
})([
  { key: 'cancel', text: '范围预览', type: 'success' },
  { key: 'ok', text: '打印', type: 'primary' }
])
```

## toDropdown

```ts
toDropdown({})([
  {
    type: 'primary',
    text: 'ddd',
    child: [
      { label: 'ss', key: 'aa' },
      { label: 'ss2', key: 'bb' }
    ]
  },
  {
    type: 'primary',
    child: [
      { label: 'ss', key: 'a' },
      { label: 'ss2', key: 'b' }
    ]
  }
])
```

```ts
Button({
  key: 'more',
  size: 'small',
  icon: 'ios-more'
})

Adaptor({
  id: 'iButton',
  key: 'more',
  size: 'small',
  icon: 'ios-more'
})
```

```ts
Adaptor({
  id: 'Buttons',
  class: 'inline-flex ml-auto justify-center space-x-1',
  child: [
    {
      key: 'a',
      size: 'small',
      icon: 'ios-search'
    },
    {
      key: 'a',
      size: 'small',
      icon: 'ios-download-outline'
    }
  ]
})
```
