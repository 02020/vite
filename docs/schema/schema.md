## schema

## to-render

```html
<to-render :on="onCMD" :schema="tempSchema2" />
<to-render :on="onCMD" :schema="tempSchema3" />
<to-render v-if="true" :schema="NeighborLandSchema" />
<to-render v-if="visible" :on="onReport" :schema="ScheduleReportSchema" />
```

```ts
export const ScheduleReportSchemaC = ({ on, data }: any) => ({
  component: 'Modal',
  class: 'ivu-report ivu-btn-text-primary',

  props: {
    title: '预编报告',
    value: true,
    width: 900,
    maskClosable: false,
    mask: false,
    footerHide: true
  },
  child: [
    toForm({
      class: 'flex ivu-form-table',
      labelWidth: 120
    })([
      ['申报编号', SR_FE.申报编号, '', 'w-1/2'],
      ['提交时间', SR_FE.提交时间, '', 'w-1/2'],
      ['测绘单位联系人', SR_FE.测绘单位联系人, '', 'w-1/2'],
      ['联系电话', SR_FE.联系电话, '', 'w-1/2'],
      ['项目地址', SR_FE.项目地址, '', 'w-1/2'],
      ['项目名称', SR_FE.项目名称, '', 'w-1/2'],
      ['宗地代码', SR_FE.宗地代码, '', 'w-1/2'],
      ['预编方式', SR_FE.预编方式, '', 'w-1/2'],
      ['预编状态', SR_FE.预编状态, '', 'w-1/2'],
      ['是否需要地调', SR_FE.是否需要地调, '', 'w-1/2'],
      {
        label: '结果说明',
        name: SR_FE.结果说明,
        class: 'w-full',
        type: 'textarea',
        rows: 3
      },
      ['预派调查员', SR_FE.预派调查员, '', 'w-1/2'],
      ['调查员联系电话', SR_FE.调查员联系电话, '', 'w-1/2'],
      ['预编人员', SR_FE.预编人员, '', 'w-1/2'],
      ['预编时间', SR_FE.预编时间, '', 'w-1/2']
    ]),

    toTable({
      data,
      columns: [
        ['序号', SR_TE.序号, 70],
        ['宗地代码', SR_TE.宗地代码, 140],
        ['项目坐落', SR_TE.项目坐落],
        ['预编状态', SR_TE.预编状态, 100],
        ['图层名称', SR_TE.图层名称, 100],
        ['重叠面积', SR_TE.重叠面积, 100],
        ['是否原宗地', SR_TE.是否原宗地, 110],
        ['是否引用', SR_TE.是否引用, 100]
      ]
    }),
    toButtons({
      class: 'mt-3 flex space-x-3  justify-end'
    })([
      { name: 'a', text: '导出数据包', type: 'primary' },
      { name: 'b', text: '提交外网', type: 'primary' }
    ])
  ]
})
```

```ts
const data5 = [
  {
    expand: true,
    render: renderTreeFirst(onCMD, '资源目录'),
    children: [
      {
        title: '房屋',
        expand: true,
        children: [
          {
            title: '幢号申请',
            expand: true,
            children: [
              {
                title: '幢号（实测地表）',
                expand: true
              },
              {
                title: '幢号（实测地下）',
                expand: true
              }
            ]
          },
          {
            title: '自然幢',
            expand: true
          }
        ]
      }
    ]
  }
]

const schema = {
  component: 'Tree',
  props: {
    data: data5,
    ['show-checkbox']: true,
    render: renderMoreButtons(onCMD)
  }
}
```




## schema-table 去掉的
```ts

// 动态渲染-根据值来渲染列
const renderColumn = (on, x) => (h, params) => {
  const { column, index, row } = params;
  const value = row[column.key];

  const __key = row[x.renderFromKey];
  if (!x.schema[__key]) {
    return renderColumnFormItem(on, x.schema['default'])(h, params);
  }

  // 返回表单类型数据
  return h('e-form-adaptor', {
    props: {
      props: { value: value, ...x.props },
      schema: x.schema[__key],
      on: (...args: any[]) => {
        // 1212
        if (typeof args[2] != 'object') {
          const cell = [index, column.key, args[2]];

          on('row', cell, params, args);
        }
        on('table-form', 'input', x.key, { column, index, row, value: args });
        console.log(params, args);
      },
    },
  });
};
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