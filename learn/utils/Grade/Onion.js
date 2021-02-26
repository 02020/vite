const creditData = [
  [
    {
      attribute_cn: '信用主体名称',
      attribute_id: 'OBJECT_NAME',
      content: '厦门闽矿测绘院',
    },
    {
      attribute_cn: '社会信用代码',
      attribute_id: 'CREDIT_CODE',
      content: '91350203155594333K',
    },
    {
      attribute_cn: '目录编号',
      attribute_id: 'BUSINESS_ID',
      content: 'SCJJ_00_0024',
    },
    { attribute_cn: '备注', attribute_id: 'BZ', content: '无' },
    { attribute_cn: '信用类别', attribute_id: 'GRADE', content: '良好' },
    { attribute_cn: '业务主键', attribute_id: 'ID', content: '1' },
  ],
  [
    { attribute_cn: '法定代表人', attribute_id: 'FDDBRXM', content: '朱振齐' },
    { attribute_cn: '备注', attribute_id: 'BZ', content: '无' },
    {
      attribute_cn: '目录编号',
      attribute_id: 'BUSINESS_ID',
      content: 'GTFC_00_0068',
    },
    { attribute_cn: '信用类别', attribute_id: 'GRADE', content: '基础' },
    { attribute_cn: '业务主键', attribute_id: 'ID', content: '2' },
  ],
];


class Onion {
  constructor(data) {
    this.fns = [];
  }

  use(newMiddleware) {
    this.fns.unshift(newMiddleware);
  }

  execute(...params) {
    const fn = this.fns.reduce((f, g) => (...args) => f(g(...args)));
    return fn(...params);
  }

  each(list) {
    const fn = this.fns.reduce((f, g) => (...args) => f(g(...args)));
    return list.map(fn);
  }
}



function onion() {
  let fns = [];
  let fn = null;
  return {
    use(newMiddleware) {
      fns.unshift(newMiddleware);
      fn = fns.reduce((f, g) => (...args) => f(g(...args)));
    },
    execute(...params) {
      return fn(...params);
    },
    each(list) {
      return list.map(fn).filter((x) => !!x);
    },
  };
}

const t = onion();

// 3 转换自定内容
const toFormItem = (item) => {
  return {
    label: item['attribute_cn'],
    name: item['attribute_id'],
    value: item['content'],
    class: item.class,
  };
};

t.use(toFormItem);

t.use((o) => {
  // 2. 样式属性 增加样式 class  字段

  const key = 'label';
  const valueList = [
    {
      key: 'class',
      values: ['信用主体名称', '法定代表人'],
      fn: 'red',
    },
    {
      key: 'class',
      values: ['目录编号'],
      fn() {
        return 'blue';
      },
    },
  ];
  valueList.map((x) => {
    if (x.values.includes(o[key])) {
      o[x.key] = typeof x.fn === 'function' ? x.fn(x) : x.fn;
      console.log(o[x.key]);
    }
  });
  return o;
});

t.use((o) => {
  // 过滤
  // Card 标题的关键字
  const key = 'name';
  const keys = ['BZ'];

  return o[key] === keys[0] ? null : o;
});

let resp = creditData.map(t.each);

console.log(resp);

// // 4 数据组装
// const toRenderTabPane = (label, name, list) => {
//   // 样式信息

//   const items = list.map((p) => {
//     // 1. 格式转换
//     const formItemList = p.map(toFormItem);

//     addKeyIncludes(formItemList, 'label', valueList);

//     // 3. 提取标题过滤数据
//     const resp = filterKey(formItemList, 'name', keys);

//     // 4. 构建Card中的内容
//     return toGroup(resp[keys[0]]['label'], +new Date(), resp.list);
//   });
//   //
//   return toTabPane(label, name, items);
// };
