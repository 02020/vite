
const IconLIST = [
  { key: 'layer', icon: 'layers', title: '图层' },
  { key: 'pick', icon: 'radio-checked', title: '拾取' },
  { key: 'polygon', icon: 'polygon', title: '绘制' },
  { key: 'upload', icon: 'upload', title: '上传' },
  { key: 'clear', icon: 'erase', title: '清除' },
  { key: 'print', icon: 'printer', title: '打印' },
];
const IconKeyLIST = [
  ['TOOL_SQ', 'pick'],
  ['TOOL_HZ', 'polygon'],
  ['TOOL_SC', 'upload'],
  ['TOOL_QC', 'clear'],
];

// 入参
const TOOLS = [
  { id: 'TOOL_SQ', name: '拾取' },
  { id: 'TOOL_HZ', name: '绘制' },
  { id: 'TOOL_SC', name: '上传' },
  { id: 'TOOL_QC', name: '清除' },
  { id: 'TOOL_QT', name: '全图' },
];

const prop = R.ifElse(
  R.propEq('key', 'layer'),
  R.assoc('id', 'value'),
  R.identity
);

const countries = [
  { flag: 'GB', cc: 'GB' },
  { flag: 'US', cc: 'US' },
  { flag: 'CA', cc: 'CA' },
  { flag: 'FR', cc: 'FR' },
];
