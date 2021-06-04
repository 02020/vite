## 表单组件

## toFrom

### 示例代码 [详见](#demo)

### Tree Props

| 属性 |            说明            |     类型 | 默认值 |
| ---- | :------------------------: | -------: | ------ |
| on   | 事件：按钮、节点、节点按钮 | Function |        |

```ts
toForm({
  ...this.$attrs,
  labelWidth: this.labelWidth,
  classFormItem: this.classFormItem,
  class: this.className,
  model: this.formModel,
  transfer: this.transfer,
  alpha: this.alpha,
  on: this.aop
})(this.schema)
```

- Cascader 层级
- DatePicker 日期范围

```ts
/** 查询表单  */
const FormQuery = [
  { ...BI_FE[100], component: 'select', child: typeList },
  BI_FE[200],
  BI_FE[300],
  BI_FE[400],
  BI_FE[500],
  BI_FE[600],
  { ...BI_FE[700], component: 'Cascader', data: dataCascader },
  { ...BI_FE[800], component: 'DatePicker', type: 'daterange' }
]

const FormQuery = [
  {
    label: '案件状态',
    key: QF_FE.案件状态,
    value: 'lsh',
    component: 'select',
    child: typeList
  },
  { label: '受理号', key: QF_FE.受理号, value: 'dy' },
  { label: '项目名称', key: QF_FE.项目名称, value: 'date' },
  { label: '项目坐落', key: QF_FE.项目坐落, value: 'user' },
  {
    label: '业务类型',
    key: QF_FE.业务类型,
    value: 2,
    component: 'select',
    child: typeList
  },
  {
    label: 'Checkbox',
    key: QF_FE.Checkbox,
    value: [1, 0],
    component: 'CheckboxGroup',
    child: typeList
  },

  {
    label: '表格',
    key: QF_FE.表格,
    value: 2,
    component: 'Table',
    columns
  }
]
```

## 基本使用方式

```vue
<template>
  <div class="w-1/2 m-10">
    <to-render :on="onCMD" :schema="schema" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

const BaseInfoFormEntity = {
  /** 注销类型 */
  100: { label: '注销类型', key: 'a' },
  /** 受理号 */
  200: { label: '受理号', key: 'b' },
  /** 项目名称 */
  300: { label: '项目名称', key: 'c' },
  /** 申请人 */
  400: { label: '申请人', key: 'd' }
}

const FE = BaseInfoFormEntity

export default defineComponent({
  setup: () => {
    let formModel = {
      a: '来至',
      b: 1
    }

    return {
      onCMD: (name: any, eName: any, key: any, value: any) => {
        console.log(name, eName, key, value)
      },
      schema: {
        component: 'e-form',
        props: {
          btns: [
            { name: 'clear', text: '清除' },
            { name: 'save', text: '保存', type: 'primary' }
          ],
          schema: [FE[100], FE[200], FE[300]],
          value: formModel,
          onInput: (val: any) => {
            formModel = val
          },
          labelWidth: 90
        }
      }
    }
  }
})
</script>
```

## 高级用法

### 带表格

```vue
<template>
  <div class="w-1/2 mt-10">
    <e-form
      class="ivu-mb-6 p-4"
      ref="form"
      :schema="FormQuery"
      :btns="btns"
      :on="onCMD"
      @input="onInput"
      :value="formModel"
      :label-width="80"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

/** 业务类型 */
const typeList = [
  { label: 'a', value: 1 },
  { label: 'b', value: 2 }
]
export enum QueryFormEnum {
  案件状态 = 'a',
  受理号 = 'b',
  项目名称 = 'c',
  项目坐落 = 'd',
  业务类型 = 'e',
  Checkbox = 'Checkbox',
  表格 = 'g'
}

const columns = [
  { type: 'selection', width: 52, align: 'center' },
  { type: 'index', title: '序号', width: 70, align: 'center' },
  ['文件名称', 'code', null, 'text-center'],
  ['创建日期', 'date', 90, 'text-center'],
  ['操作', 'btn', 80, '', [{ name: 'down', type: 'primary', text: '下载' }]]
]

const QF_FE = QueryFormEnum

export default defineComponent({
  components: {
    // MarkerStyle,
  },
  setup: (_, ctx) => {
    const title = ref()

    const onCMD = (name: any, key: any, ...args: any) => {
      console.log('onCMD:' + name, ...args)
    }

    let formModel = {
      name1: '来至',
      e: [1, 2]
    }
    const onInput = (val: any) => {
      formModel = val
    }

    return {
      title,
      onCMD,
      btns: [
        { name: 'clear', text: '清除' },
        { name: 'save', text: '保存', type: 'primary' }
      ],
      FormQuery: [
        {
          label: '案件状态',
          key: QF_FE.案件状态,
          value: 'lsh',
          component: 'select',
          child: typeList
        },
        { label: '受理号', key: QF_FE.受理号, value: 'dy' },
        { label: '项目名称', key: QF_FE.项目名称, value: 'date' },
        { label: '项目坐落', key: QF_FE.项目坐落, value: 'user' },
        {
          label: '业务类型',
          key: QF_FE.业务类型,
          value: 2,
          component: 'select',
          child: typeList
        },
        {
          label: 'Checkbox',
          key: QF_FE.Checkbox,
          value: [1, 0],
          component: 'CheckboxGroup',
          child: typeList
        },

        {
          label: '表格',
          key: QF_FE.表格,
          value: 2,
          component: 'Table',
          columns
        }
      ],
      onInput,
      formModel
    }
  }
})
</script>
```
