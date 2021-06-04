## columns

数组
| 属性 | 说明 | 类型 | 默认值 |
| ------ | :-----------------------: | ---: | ------ |
| title | | | |
| key | | | |
| width | | | |
| class | | | |
| schema | [渲染结构体](#schema) | Array[schema]| |
| component | [表单组件](#component) | Array[schema]| |

### schema

渲染结构体: 数组
| 属性 | 说明 | 类型 | 默认值 |
| ------ | :-----------------------: | ---: | ------ |
| name | | | |
| type | 按钮类型 | | |
| text | 按钮名称 | String | |
| foreign | 列的 key | String | |
| render | 按钮组 | Array<> | |

### component

表单组件

```ts
const columns = [
  { title: '组件', key: 'checkbox', width: 60, component: 'Checkbox' },
  {
    title: '选择框',
    key: 'id',
    width: 120,
    component: 'Select',
    child: dict,
    transfer: true
  }
]
```

---

#### foreign

用来动态渲染按钮，值从其他列中获取

```ts
const dict = [
  { label: '值1', value: 1 },
  { label: '值2', value: 2 },
  { label: '值3', value: 3 },
  { label: '值4', value: 4 }
]

const 字典 = {
  title: '字典',
  key: 'dict',
  width: 60,
  class: 'text-right',
  dict: dict
}
```

操做按钮组（不可变）

```ts
const 操做按钮组 = {
  title: '按钮',
  key: 'btn',
  width: 120,
  schema: [
    {
      name: 'ok',
      type: 'primary',
      text: '确定'
    },
    {
      name: 'cancel',
      type: 'success',
      text: '取消'
    }
  ]
}
```

#### 根据 foreign 值动态渲染按钮

```ts
const bntList = [
  {
    value: 0,
    text: '按钮'
  },
  {
    value: 1,
    type: 'primary',
    text: '按钮1'
  },
  {
    value: 2,
    text: '按钮2'
  },
  {
    value: 3,
    type: 'primary',
    text: '按钮3'
  }
]

const data = [{ dict: 0 }, { dict: 1 }, { dict: 2 }, { dict: 3 }]

const 动态按钮 = {
  title: '动态按钮组',
  key: 'btns',
  width: 220,
  schema: [
    {
      name: 'cancel',
      type: 'success',
      foreign: 'dict',
      render: bntList
    }
  ]
}
const columns: Array<any> = []
columns.push(动态按钮)
```

#### 是否按钮

```ts
const list = ref([
  { f1: 0, f2: 0, key: 1 },
  { f1: 1, f2: 0, key: 0 },
  { f1: 2, f2: 0, key: 1 },
  { f1: 3, f2: 0, key: 0 }
])

const 是否按钮 = {
  title: '是/否按钮',
  key: 'key',
  width: 220,
  schema: [
    { name: 'yes' },
    { foreign: 'f1', name: 'yes' },
    { foreign: 'f2', name: 'yes' }
  ]
}
```

```ts
const schema = [
  {
    component: 'e-table',
    props: { on, data, columns }
  },
  toTable({ on, data, columns })
]
```

### 表单组件

```vue
<template>
  <div class="m-auto">
    <e-table
      :on="onCMD"
      type="index,selection"
      :columns="columns"
      :data="data"
      :pageSize="pageSize"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue-demi'

const dict = [
  { label: '值1', value: 1 },
  { label: '值2', value: 2 },
  { label: '值3', value: 3 },
  { label: '值4', value: 4 }
]

const columns = [
  ['代码', 'code', 60, 'text-right'],
  ['按钮', 'btn', 70, '', [{ name: 'ok', type: 'primary', text: '按钮' }]],
  { title: '字典', key: 'dict', width: 60, class: 'text-right', dict: dict },
  { title: '组件', key: 'checkbox', width: 60, component: 'Checkbox' },
  { title: '开关', key: 'switch', width: 80, component: 'Switch' },
  {
    title: '选择框',
    key: 'id',
    width: 120,
    component: 'Select',
    child: dict,
    transfer: true
  },
  {
    title: '日期',
    key: 'time',
    width: 160,
    component: 'TimePicker',
    transfer: true
  },
  {
    title: '日期',
    key: 'date',
    width: 160,
    component: 'DatePicker',
    transfer: true
  },
  {
    title: '颜色',
    key: 'color',
    width: 120,
    component: 'ColorPicker',
    transfer: true
  },
  {
    title: 'Slider',
    key: 'slider',
    width: 320,
    component: 'Slider',
    showTip: 'never',
    showInput: true
  }
]

const data = [
  {
    id: 1,
    code: 1,
    is: 0,
    dict: 0,
    btn: 1,
    checkbox: 1,
    switch: 1,
    time: '14:00:00',
    date: '2020-10-1',
    color: '#F1F',
    slider: 100
  },
  {
    id: 2,
    code: 2,
    is: 1,
    dict: 1,
    btn: 0,
    checkbox: 1,
    switch: 0,
    time: '17:00:00',
    date: '2020-10-1',
    color: '#F4F',
    slider: 10
  },
  {
    id: 3,
    code: 3,
    is: 0,
    dict: 2,
    btn: 1,
    checkbox: 0,
    switch: 1,
    time: '18:00:00',
    date: '2020-10-1',
    color: '#F7F',
    slider: 20
  },
  {
    id: 4,
    code: 4,
    is: 0,
    dict: 3,
    btn: 0,
    checkbox: 1,
    switch: 1,
    time: '15:00:00',
    date: '2020-10-1',
    color: '#FAF',
    slider: 40
  }
]

export default defineComponent({
  setup() {
    const onCMD = (key, value) => {
      console.log(key, value)
    }

    return {
      onCMD,
      columns,
      data,
      pageSize: 0 // 2, // 不要分页
    }
  }
})
</script>
```
