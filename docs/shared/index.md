1. [我对知乎前端相关问题的十问十答](http://www.zhangxinxu.com/wordpress/2017/06/ten-question-about-frontend-zhihu/)



1. [14个调试技巧](https://juejin.im/entry/5a0001b86fb9a0451a75c591?utm_medium=fe&utm_source=weixinqun)

### 开发规范
1. 原文 [JavaScript 开发规范（一）： 命名与注释规范详解](https://juejin.im/entry/599d433cf265da24797b5c66)
1. [提高代码质量：如何编写函数](https://juejin.im/entry/56cd255b1532bc00536894c1);



### js 算法
1. [数组去重](https://zhuanlan.zhihu.com/p/25545584)
1. [深浅拷贝](https://zhuanlan.zhihu.com/p/26282765)
1. []()
1. []()
1. []()
1. []()
1. []()
1. []()
1. []()
1. []()
1. []()


## 源码学习
1. [underscore.js源码的组织结构](http://www.jianshu.com/p/e602ce36b6f7)


[](https://github.com/stephentian/33-js-concepts)
[](https://github.com/csxiaoyaojianxian/JavaScriptStudy)



## 函数


collectionHandlers
functionApply


## 对象



## 数组


## 对象判断

### 用对象字面量或Map替代Switch语句

```ts
// use object literal to find fruits by color
  const fruitColor = {
    red: ['apple', 'strawberry'],
    yellow: ['banana', 'pineapple'],
    purple: ['grape', 'plum']
  };

function printFruits(color) {
  return fruitColor[color] || [];
}
```

```ts
// use Map to find fruits by color
  const fruitColor = new Map()
    .set('red', ['apple', 'strawberry'])
    .set('yellow', ['banana', 'pineapple'])
    .set('purple', ['grape', 'plum']);

function printFruits(color) {
  return fruitColor.get(color) || [];
}
```