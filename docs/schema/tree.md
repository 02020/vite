## eTree

等同于 toTree

## toTree

### 示例代码 [详见](#demo)

### Tree Props

| 属性         |            说明            |     类型 | 默认值 |
| ------------ | :------------------------: | -------: | ------ |
| data         |       [详见](#demo)        |    Array |        |
| on           | 事件：按钮、节点、节点按钮 | Function |        |
| btns         |       [详见](#demo)        |    Array |        |
| buttonC      |       [详见](#demo)        | Function |        |
| showCheckbox |       Tree 中的属性        |  Boolean | false  |

### demo

```ts
toModal({
  id: 'e-tree',
  title: '地块拾取',
  width: 360,
  class: 'ivu-w-full',
  on: (key, value, root) => {
    console.log({ key, value, root })
  },
  // btn 为底部按钮
  btns: [
    { name: 'clear', text: '清空', visible: ['btn'] },
    { name: 'export', text: '导出', type: 'primary', visible: ['btn'] },
    { name: 'add', size: 'small', icon: 'md-power', visible: ['a'] },
    { name: 'remove', size: 'small', icon: 'md-remove', visible: ['b'] }
  ],
  buttonC: ({ btns, data }) => {
    return btns.filter(
      (x) => x.visible.indexOf(!data.children ? 'b' : 'a') > -1
    )
  },
  data: [
    {
      title: ['幢号申请', 'a'],
      child: [
        {
          title: ['幢号子级申请', 'a'],
          child: [
            ['0001', 'aa'],
            ['0002', 'bb']
          ]
        },
        ['0002', 'abb']
      ]
    },
    {
      title: ['正式宗地', '正式宗地'],
      child: [
        ['0001', 'aaa'],
        ['0002', 'bbb']
      ]
    }
  ]
})
```

## eTreeUpload

### TreeUpload Props

| 属性         |            说明            |     类型 | 默认值 |
| ------------ | :------------------------: | -------: | ------ |
| data         |       [详见](#demo)        |    Array |        |
| on           | 事件：按钮、节点、节点按钮 | Function |        |
| btns         |       [详见](#demo)        |    Array |        |
| buttonC      |       [详见](#demo)        | Function |        |
| showCheckbox |       Tree 中的属性        |  Boolean | false  |

## temp

```ts

    // 暂定 数据由返回的接口
    layerList: {
      type: Array,
      default: () => [],
    },
	    /** 上传路径 */
    url: {
      type: String,
      default: '',
    },



	   if (key == 'upload') {
        // 1212 编写上传代码

        spinShow.value = true;

        setTimeout(() => {
          spinShow.value = false;

          data.value = layerList;
          console.log(data.value);
        }, 2000);

        return;
      }
```
