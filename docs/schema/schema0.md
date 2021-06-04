## schema

## to-render

```html
<to-render :on="onCMD" :schema="tempSchema2" />
<to-render :on="onCMD" :schema="tempSchema3" />
```



### toForm

```ts
const columnAItems = [
  { label: '流水号', key: '1', value: 'lsh' },
  { label: '自定义', key: '2', value: 'dy' },
  { label: '日期', key: '3', value: 'date' },
  { label: '用户', key: '4', value: 'user' }
]

const fromList = toForm({
  labelWidth: 120
})(columnAItems)
```

### toSelect

```ts
const columnAItems = [
  { label: '流水号', name: '1', value: 'lsh' },
  { label: '自定义', name: '2', value: 'dy' },
  { label: '日期', name: '3', value: 'date' },
  { label: '用户', name: '4', value: 'user' }
]


 {
        class: 'flex space-x-3',
        child: [
          toSelect({})(columnAItems),
          {
            component: 'e-select',
            props: {
              schema: columnAItems,
            },
          },
        ],
      },
```

```ts
const schema = [
  {
    name: 'dd1',
    title: '我是标题-1',
    child: btns
  },
  {
    name: 'dd2',
    title: '我是标题-2',
    child: fromList
  },
  {
    name: 'dd3',
    title: '我是标题-2',
    child: fromList
  }
]
```

```ts
const schema = kit.keysTo(['label', 'name', 'class', 'component', 'child'])([
  ['名称', 'name', 'w-full'],
  ['备注', 'desc', 'w-full'],
  ['线条颜色', 'color', 'w-full', 'colorPicker'],
  ['线条宽度', 'width', 'w-1/2', 'select', columnAItems],
  ['线条样式', 'style', 'w-1/2', 'select', columnAItems]
])

const schema = [
  {
    label: '名称',
    name: 'name',
    class: 'w-full'
  },
  {
    label: '备注',
    name: 'desc',
    type: 'textarea',
    class: 'w-full'
  },
  {
    label: '线条颜色',
    name: 'desc',
    component: 'ColorPicker',
    class: 'w-full'
  },
  {
    label: '线条宽度',
    name: 'desc',
    component: 'select',
    child: columnAItems,
    class: 'w-1/2'
  },
  {
    label: '线条样式',
    name: 'desc',
    component: 'select',
    child: columnAItems,
    class: 'w-1/2'
  }
]
```

### 按钮

```ts
const collapseSchema = kit.keysTo(['name', 'title', 'child'])

const btns = toButtons({
  class: 'flex justify-center space-x-3'
})([
  { name: 'a', text: '按钮1', type: 'primary' },
  { name: 'b', text: '按钮2', type: 'success' }
])

btns.child.push(toSelect({})([{ label: 'A', name: '1', value: 'lsh' }]))

const btns = [
  { key: 'a', icon: 'ios-search', type: 'primary', shape: 'circle' },
  { key: 'a', icon: 'ios-crop', type: 'primary', shape: 'circle' }
]
```

### 插销

```html
<template v-slot:k2="value">
  {{ value }}
  <to-render name="组件名字:slot1" :on="onCMD" :schema="tempSchema1" />
</template>

<template v-slot:k3="value">
  {{ value }}
  <to-render name="组件名字:slot2" :on="onCMD" :schema="tempSchema2" />
</template>
```

```ts
let onCMD = (name: any, eventName: any, key: any, ...args: any) => {
  console.log(
    `onCMD  name:【${name}】 eventName:【${eventName}】 key:【${key}】`,
    args
  )
}
```

```ts
/** 数据库的字段 */
interface Field {
  /** 字段名称 */
  key: String
  /** 字段描述 */
  text: String
}
const Model = {
  /** 项目名称 */
  name: { label: '项目名称', key: '' },
  /** 项目坐落 */
  address: { label: '项目坐落', key: '' },
  /** 项目代码 */
  code: { label: '项目代码', key: '' },
  /** 项目编号 */
  serial: { label: '项目编号', key: '' }
}

const toField = (text: String, key: String) => ({ key, text })
toField

const Model = {
  /** 项目名称 */
  name: toField('项目名称', ''),
  /** 项目坐落 */
  address: toField('项目坐落', ''),
  /** 项目代码 */
  code: toField('项目代码', ''),
  /** 项目编号 */
  serial: toField('项目编号', '')
}
```

```ts
const FormSchemaKeys = ['label', 'name', 'value', 'class', 'component', 'child']
//  如果事对象则直接返回
export const toFormSchema = kit.toObjectArray(FormSchemaKeys)
```


```ts
const LandSelectSchemaC = (props: any) => ({
  name: 'ScheduleReport',
  class: 'ivu-report',
  title: '预编报告',
  width: 900,
  on: props.on,
  schema: [
    toForm({
      class: 'flex flex-row justify-start',
      classFormItem: 'w-1/3', // FormItem 的样式
      labelWidth: 80,
      model: props.formModel
    })([
      ST_E[100],
      ST_E[200],
      ST_E[300],
      {
        component: 'Buttons',
        class: 'ml-4',
        child: [{ key: 'query', type: 'primary', text: '查询' }]
      }
    ]),

    toTable({
      class: 'border-t-1 border-x-1 ',
      columns: [
        { type: 'selection', width: 55, align: 'center' },
        { type: 'index', title: '序号', width: 70, align: 'center' },
        [ST_E[100], 140],
        [ST_E[200]],
        [ST_E[300]],
        [ST_E[400], 100]
      ],
      data: props.tableData,
      on: props.on // 注入表格行按钮点击事件
    }),
    toButtons({
      class: 'mt-3 flex space-x-3  justify-end'
    })([
      { name: 'cancel', text: '取消' },
      { name: 'ok', text: '确定', type: 'primary' }
    ])
  ]
})
```
