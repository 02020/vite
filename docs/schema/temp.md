```ts
;[
  ['on-row-click', 'row-click', onTable['row-click']],
  ['on-row-dblclick', 'row-dblclick'],
  ['on-select', 'select'],
  ['on-select-cancel', 'select-cancel'],
  ['on-select-all', 'select-all'],
  ['on-selection-change', 'selection-change', onTable['selection-change']]
]
```

```ts
const on = !props.on
  ? [
      ['input'], // 用于接收值
      ['on-blur', 'blur'],
      ['on-enter', 'enter'],
      ['on-clear', 'input-clear']
    ]
  : [
      [
        'input',
        'input',
        (val) => {
          value = val
          props.on('input', value)
        }
      ], // 用于接收值
      [
        'on-blur',
        'blur',
        () => {
          props.on('input-blur', value)
        }
      ],
      [
        'on-enter',
        'enter',
        () => {
          props.on('input-enter', value)
        }
      ],
      [
        'on-clear',
        'input-clear',
        () => {
          props.on('input-clear', value)
        }
      ]
    ]
```

```ts
const flag = key.length == 1
let keyN = undefined
// 1212
if (flag) {
  keyN = key.value
  if (column.key) {
    valueRow[column.key] = valueRow[column.key] == 1 ? 0 : 1
  }
} else {
}
```

```ts
const sc1 = {
  name: 'cancel',
  type: 'success',
  foreign: 'dynamic',
  text: '打印'
}

const sc2 = {
  name: 'cancel',
  type: 'success',
  foreign: 'dynamic',
  render: [
    {
      value: 0,
      text: '按钮'
    },
    {
      value: 1,
      text: '按钮1'
    },
    {
      value: 2,
      text: '按钮2'
    }
  ]
}
```

```ts
// 向渲染的组件传递作用域插槽
const slotsC = (slots: any = {}, scopedSlots: any) => {
  // console.log('slots', slots);
  // console.log('scopedSlots', scopedSlots);
  var resp = Object.keys(slots).reduce((acc, key) => {
    // console.log('scopedSlots[key]', slots[key]);

    acc[key] = (props) => {
      console.log('slotsC', props)
      if (Array.isArray(slots[key])) {
        return slots[key].map(scopedSlots[key])
      } else {
        return scopedSlots[key](props)
      }
    }
    return acc
  }, {})

  return resp
}
```

```ts


<style>
  .prepareLandInfo .btn .ivu-collapse-content-box {
    display: flex;
    margin: auto;
    padding: 8px;
  }

  .prepareLandInfo .btn .ivu-menu-submenu {
    padding: 0 6px 0 20px;
    border: 1px silver solid;
    border-radius: 4px;
    margin: 0 5px;
  }
  .prepareLandInfo .btn .ivu-menu {
    margin: auto;
  }

  .prepareLandInfo .btn .ivu-menu-horizontal.ivu-menu-light:after {
    height: 0;
  }
</style>



const IVU_VIEW = {
  /*
props.child,
props.title,
props.content,
Poptip
*/
};



// 带表单组件的表格

const renderColumnFormItem = (on, x) => (h, params) => {
  const { column, index, row } = params;
  const value = row[column.key];
  console.log('renderColumnFormItem', value);
  return h('e-form-adaptor', {
    props: {
      props: { value: value, ...x },
      on: (...args) => {
        // if (typeof args[2] != 'object') {
        //   const cell = [index, column.key, args[2]];
        //   on('row', cell, params, args);
        // }
        // console.log(params, args);
      },
    },
  });
};
```

```ts
const _fit = (x: any) => {
  if (Array.isArray(x)) {
    const [label, value] = x
    return { label, value }
  } else {
    const { label, value } = x
    return { label, value }
  }
}
```

```ts
/** 给实体赋值 */
const set = (entity: any, formData: any) =>
  Object.entries(entity).reduce((acc, [key, value]) => {
    acc[key] = {
      label: value.label,
      name: value.name,
      value: formData[value.name]
    }
    return acc
  }, {})
```

### 接口

```ts
interface IItem {
  label: string
  name: string
  value: any
}
```

```ts
interface I_Option {
  series: {
    data: {
      name: string
      value: number | string
      unit?: string
    }[]
    name?: string
    type: 'pie'
  }[] // 数据集配置
}
const mock: I_Option = {
  series: [
    {
      type: 'pie',
      data: [
        {
          name: '中药',
          value: '2630',
          unit: '家'
        }
      ]
    }
  ]
}

enum PatchFlags {
  _100 = 'ddd',
  _200 = 'AAA',
  _300 = 'ddd',
  _400 = 'ddd',
  _500 = 'ddd',
  _600 = 'ddd',
  _700 = 'ddd',
  _800 = 'ddd',
  _900 = 'ddd',
  _1000 = 'ddd',
  _1100 = 'ddd',
  _1200 = 'ddd'
}

const Path = {
  [PatchFlags._100]: '字段',
  [PatchFlags._200]: '字段',
  [PatchFlags._300]: '字段',
  [PatchFlags._400]: '字段',
  [PatchFlags._400]: '字段',
  [PatchFlags._500]: '字段',
  [PatchFlags._700]: '字段',
  [PatchFlags._800]: '字段',
  [PatchFlags._900]: '字段',
  [PatchFlags._1100]: '字段',
  [PatchFlags._1200]: '字段'
}

Path[PatchFlags._100]

Path[PatchFlags._200]
```
