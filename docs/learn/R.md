# R 

[Ramda 函数库参考教程](https://www.cnblogs.com/chris-oil/p/10372194.html)

[](https://www.pianshen.com/article/5706274185/)


### 已经采用的函数
```ts

R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']

// 取出对象中指定属性的值。
R.prop('x', {x: 100}); //=> 100

R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]

//
R.apply(Math.max, num); //=> 42
```


## 5.1 函数的合成





## 数据

```ts
// 入参
const keyList = [
  // id, name
  ['TOOL_SQ', '拾取'],
  ['TOOL_HZ', '绘制'],
  ['TOOL_SC', '上传'],
  ['TOOL_QC', '清除'],
  ['TOOL_QT', '全图'],
];
```

## 将嵌套数组转为一个对象

```ts
let resp = null;
resp = R.fromPairs(CONST);

// 结果
[{ TOOL_SQ: '拾取' }, { TOOL_HZ: '绘制' }];
```

## 将数组转换成对象

```ts
let resp = null;
resp = R.map(R.zipObj(['id', 'name']))(keyList);

// 结果
resp = [
  { id: 'TOOL_SQ', name: '拾取' },
  { id: 'TOOL_HZ', name: '绘制' },
  { id: 'TOOL_SC', name: '上传' },
  { id: 'TOOL_QC', name: '清除' },
  { id: 'TOOL_QT', name: '全图' },
];
```
