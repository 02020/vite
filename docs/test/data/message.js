// 数据参数
const data = [
  {
    bizExt: {
      zlht: {
        id: '1376794171397017604',
        htmc: '合同名称',
        zljzrq: '2022-04-15',
        zlksrq: '2021-01-15',
        zjjnzq: '缴纳周期'
      }
    },
    title: '12合同到期',
    content: '消息提醒: '
  }
]

// 模板参数
const template = {
  title: '合同到期',
  key: 'ZLHT_DQ',
  value:
    '您的合同即将到期，请您按合同要求做好清退搬迁准备并办理现场移交事宜，如有疑议，请联系项目负责人。',
  fields: [
    [
      ['zlht', '数据来源-租赁合同'],
      ['htmc', '合同名称'],
      ['zlksrq', '租赁开始日期'],
      ['zljzrq', '租赁截止日期'],
      ['zjjnzq', '租金缴纳周期']
    ]
  ]
}

// 最终样式

const resp = [
  {
    name: '',
    head: '',
    foot: '',
    list: [
      {
        label: '',
        value: ''
      }
    ]
  }
]

export default {
  data,
  template
}
