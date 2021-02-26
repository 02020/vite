---
title: fR
---

::: tip fR
固定顺次
[label, name, value, tip, visible, group, class]

对象方式
:::

[[toc]]

## 示例 1. 组装表单数据

### 入参

```ts
const list = [
  // ['label', 'name','value', 'tip', 'visible', 'group', 'class' ],
  ['标识码', 'bsm', '', '', false],
  ['合同名称', 'name'],
  ['合同期限', 'start,end'],
  ['合同类型', 'dict'],
  {
    label: '对象方法',
    name: '',
    visible: false,
    group: '',
    class: ''
  }
]

const info = {
  bsm: '',
  number: 1,
  name: '名称',
  start: '2020年11月11日',
  end: '2020年12月12日',
  person: '李四',
  dict: 1
}
```

### 结果

```ts
const resp = kit.toFormItems(list, filters)(info)

const resp = [
  {
    label: '标识码',
    name: 'bsm',
    value: '',
    tip: '',
    visible: false,
    group: undefined,
    class: undefined
  },
  { label: '合同名称', name: 'name', value: '名称' },
  {
    label: '合同期限',
    name: 'start,end',
    value: '2020年11月11日至2020年12月12日'
  },
  { label: '合同类型', name: '已缴纳' }
]
```

### 处理数据的函数

```ts
const filters = [
  ['money', (value) => `￥${value}`],
  [
    // 字典
    'dict',
    (value, info, name) => {
      return ['未缴纳', '已缴纳'][info[name]]
    }
  ],
  [
    // 日期拼接
    'start,end',
    (value, info, name) => {
      const t = name.split(',')
      if (t && t.length == 2) {
        value = info[t[0]] + '至' + info[t[1]]
      }
      return value
    }
  ]
]
```

## 示例 2. 代码参考-未完整

```ts

const
  contractInfoConfig= {
    // 待签合同
    signed: [
      ['合同标识码', 'bsm', false],
      ['合同编号', 'htbh'],
      ['合同名称', 'htmc'],
      ['合同期限', 'zlksrq,zljzrq', '', filter_merge],
      ['承租人', 'dwMc'],
      ['乙方签约状态', 'yfqszt'],
      ['甲方签约状态', 'jfqszt'],
      ['有效签署时长', '']
    ],
    // 履约合同
    execution: [
      ['合同标识码', 'bsm', false],
      ['合同编号', 'htbh'],
      ['合同名称', 'htmc'],
      ['合同期限', 'zlksrq,zljzrq', '', filter_merge],
      ['承租人', 'dwMc'],
      ['合同类型', 'htlx', '', filter_dict],
      ['签订日期', 'htqdrq']
    ],

    // 历史合同
    history: [
      ['合同标识码', 'bsm', false],
      ['合同编号', 'htbh'],
      ['合同名称', 'htmc'],
      ['合同期限', 'zlksrq,zljzrq', '', filter_merge],
      ['承租人', 'dwMc'],
      ['合同类型', 'htlx'],
      ['签订日期', 'htqdrq']
    ]
  }
}

const contractConfig = [
  {
    key: 'signed',
    name: '待签合同',
    btns: [
      {
        text: '去签署',
        key: 'sign',
        type: 'primary',
        url: '去签署'
      }
    ]
  },
  {
    key: 'execution',
    name: '履约合同',
    btns: [
      {
        text: '查看合同',
        key: 'show',
        type: 'default',
        url: ' '
      },
      {
        text: '录入居住人信息',
        key: 'input',
        type: 'primary',
        url: './asset' //resident',
      }
    ]
  },
  {
    key: 'history',
    name: '历史合同',
    btns: [
      {
        text: '查看居住人信息',
        key: 'resident',
        type: 'default',
        url: './resident'
      },
      {
        text: '查看合同',
        key: 'show',
        type: 'primary',
        url: ' '
      }
    ]
  }
]
```

```ts
/*
 * value: string
 */
const { fMap, fR, toFormItems } = kit
const handleData = (list, value) => {
  const type = contractConfig[value].key
  const fn = fMap((x) => toFormItems(contractInfoConfig[type]))

  return fn(list)
}
```
