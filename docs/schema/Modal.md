```html
<to-render v-if="true" :schema="NeighborLandSchema"></to-render>
<to-render v-if="visible" :on="onReport" :schema="ScheduleReportSchema"></to-render>
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
    footerHide: true,
  },
  child: [
    toForm({
      class: 'flex ivu-form-table',
      labelWidth: 120,
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
        rows: 3,
      },
      ['预派调查员', SR_FE.预派调查员, '', 'w-1/2'],
      ['调查员联系电话', SR_FE.调查员联系电话, '', 'w-1/2'],
      ['预编人员', SR_FE.预编人员, '', 'w-1/2'],
      ['预编时间', SR_FE.预编时间, '', 'w-1/2'],
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
        ['是否引用', SR_TE.是否引用, 100],
      ],
    }),
    toButtons({
      class: 'mt-3 flex space-x-3  justify-end',
    })([
      { name: 'a', text: '导出数据包', type: 'primary' },
      { name: 'b', text: '提交外网', type: 'primary' },
    ]),
  ],
});
```

```ts
export const BuildingCancelSchemaC = (props: any) => ({
  name: '幢号注销',
  class: 'ivu-report',
  title: '幢号注销',
  width: 900,
  on: props.on,
  type: props.type,
  btns: [
    { name: 'save', text: '注销', type: 'primary' },
    { name: 'cancel', text: '取消', type: 'primary' },
  ],
  value: props.value,
  items: [
    {
      ...FE[100],
      class: 'w-full',
      type: 'textarea',
      rows: 3,
      readonly: false,
    },
    FE[200],
    FE[300],
  ],
  columns: [
    [BI_FE[100], 140],
    [BI_FE[200]],
    [BI_FE[300]],
    [BI_FE[400], 100],
    [BI_FE[500], 100],
    [BI_FE[600], 110],
    [BI_FE[700], 100],
  ],
  data: props.data,
});

const modal = toTableFormModal(
  BuildingCancelSchemaC({
    on: (name: any, eName: any, key: any, value: any) => {
      console.log('onReport', name, eName, key, value);

      if (key == 'cancel') {
        modal.hide();
      } else if (key == 'save') {
        // 执行保存
        request({
          url: API.System.get,
          params: {},
        }).then((resp) => {
          console.log(resp);
        });
      }
    },
    type: 'index,selection',
    value: { id: '11' },
    data: [{ id: 1 }, { id: 2 }, { id: 3 }],
  })
);
```


## Tree
```ts
const modal = useModal({
  name: ' ',
  title: 'dd',
  width: 400,
  schema: toTree({
    class: 'ivu-w-full',
    on: (key, value) => {
      console.log({ key, value });
    },
    btns: [{ name: 'delete', size: 'small', icon: 'md-trash', visible: ['b'] }],
    buttonC: ({ btns, data }) => {
      return btns.filter((x) => x.visible.indexOf(!data.parent ? '' : 'b') > -1);
    },
    data: StanderDataTree,
  }),
});
```
