
## vue
1. [官网](https://cn.vuejs.org/v2/guide/)
1. [走进Vue.js](http://www.jianshu.com/p/78c9e5342990)
1. [Vue2.0 新手完全填坑攻略——从环境搭建到发布](http://www.jianshu.com/p/5ba253651c3b)
1. [vue2.0 - 完整](http://leenty.com/2016/10/21/vue2-1/)
1. [Awesome Vue.js 英文](https://github.com/vuejs/awesome-vue)
1. [awesome-github-vue 中文](https://github.com/opendigg/awesome-github-vue#Demo%E7%A4%BA%E4%BE%8B)
1. [Vue.js入门](http://www.jianshu.com/p/40b10dbf7bd6)
1. [Vue2.0子父组件通信](http://www.jianshu.com/p/2670ca096cf8)
1. [用vue撸后台](http://www.jianshu.com/p/c315c9211146)
1. [简书-vue 集结号](http://www.jianshu.com/c/c24e81b7970b)
1. [简书-vue 资料](http://www.jianshu.com/c/4652107a7847)
1. [掘金](https://juejin.im/tag/Vue.js)

## ui
1. [AliTelecom UI System 移动端](https://aliqin.github.io/atui/docs/atui/introduce)


## vue-cli
1. [vue-cli入门（一）——项目搭建](http://www.jianshu.com/p/c84eca5a2059)
1. [vue-cli入门（二）——项目结构](http://www.jianshu.com/p/7006a663fb9f)
1. [http://www.jianshu.com/p/5d9b341d650f](http://www.jianshu.com/p/5d9b341d650f)
1. []()
1. []()
1. []()
1. [vue-cli 搭建项目](http://blog.csdn.net/wisewrong/article/details/55212684)

## vue-router
1. [vue-router 2](https://router.vuejs.org/zh-cn/essentials/named-routes.html)

## Vuex
1. [vuex-官方](https://vuex.vuejs.org/zh-cn/index.html)
1. [vuex](http://www.cnblogs.com/wisewrong/p/6344390.html)
1.  ★★★★★  [详解 Vue & Vuex 实践](https://zhuanlan.zhihu.com/p/25042521)
1. [辅助函数](http://www.imooc.com/article/14741)
1. [Vuex源码阅读笔记](http://blog.csdn.net/qq_24122593/article/details/53740672)
1. [Vuex 构建一个笔记应用](http://www.tuicool.com/articles/qUzMN3Y)


## axjos
1. []()


## 实例
1. [Vue + ElementUI 后台管理系统](https://juejin.im/post/58d51155b123db337066b3d7)
1. [app](https://github.com/hzzly/xyy-vue)


## NPM
1. [npm](https://www.npmjs.com/)
1. [npm -淘宝-中国镜像](https://npm.taobao.org/)


## 其他
1. [vue-amap](https://elemefe.github.io/vue-amap/#/docs/introduction)




# 组件应用
el-input 组件不支持 按键事件，例如：回车   <input @keyup.enter="handleEnter">

## js
1. [throttle和debounce](http://www.tuicool.com/articles/67bA3iA)
1. [throttle.js](https://github.com/niksy/throttle-debounce/blob/master/throttle.js)


## css
1. [](https://github.com/Molunerfinn/theme-default)

### carousel
main




## Mixin
1. [关于 Vue Mixin 和 Directive 的使用](http://www.tuicool.com/articles/6FBbUrQ)
1. [弹出框组件](https://juejin.im/entry/57d22dfa7db2a20068260930)
1. [看不懂](http://www.tuicool.com/articles/fYbIZf6)

1. [Vue.js 组件编码规范](https://pablohpsilva.github.io/vuejs-component-style-guide/#/chinese)
1. [Vue及Vue插件源码解析](https://github.com/DDFE/DDFE-blog)
1. []()
1. []()
1. []()
1. []()
1. []()
1. []()
1. []()
1. []()

### vue-router
1. [vue-router](http://www.jianshu.com/p/3fd8f088e824)


## Vue插件
1. [Vue.Draggable](https://github.com/SortableJS/Vue.Draggable)




```javascript

updateItems() {
  this.items = this.$children.filter(child => child.$options.name === 'ElCarouselItem');
},

```

# Vue

## demo

```html
<template>
  <form
    class="el-form"
    :class="[
      labelPosition ? 'el-form--label-' + labelPosition : '',
      { 'el-form--inline': inline },
    ]"
  >
    <slot></slot>
  </form>
</template>
<script>
  export default {
    name: 'ElForm',
    componentName: 'ElForm',
    mixins: [],
    components: {},
    props: {
      model: Object,
      labelWidth: String,
      inline: Boolean,
      showMessage: {
        type: Boolean,
        default: true,
      },
    },
    computed: {},
    watch: {
      rules() {},
    },
    data() {
      return {
        fields: [],
      };
    },
    created() {},
    methods: {
      validate(callback) {},
    },
  };
</script>
<style></style>
```

## 生命周期

```ts
var app = new Vue({
  el: '#app',
  data: {
    number: 1,
  },
  beforeCreate: function () {
    console.log('beforeCreate 钩子执行...');
    console.log(this.number);
  },
  created: function () {
    console.log('created 钩子执行...');
    console.log(this.number);
  },
  beforeMount: function () {
    console.log('beforeMount 钩子执行...');
    console.log(this.number);
  },
  mounted: function () {
    console.log('mounted 钩子执行...');
    console.log(this.number);
  },
  beforeUpdate: function () {
    console.log('beforeUpdate 钩子执行...');
    console.log(this.number);
  },
  updated: function () {
    console.log('updated 钩子执行...');
    console.log(this.number);
  },
  beforeDestroy: function () {
    console.log('beforeDestroy 钩子执行...');
    console.log(this.number);
  },
  destroyed: function () {
    console.log('destroyed 钩子执行...');
    console.log(this.number);
  },
});
```

# API

## Mixins 混入

```ts
export const gisMixins = {
  data() {
    return {
      testMix: '混入对象的data',
    };
  },
  created() {},
  methods: {
    mixinsFun() {},
  },
  computed: {
    testMix2() {
      return this.testMix;
    },
  },
  watch: {
    testMix(newVal, oldVal) {},
  },
};

```

## Route
```ts

```
## Render

[render](https://cn.vuejs.org/v2/guide/render-function.html?)

### createElement

```ts
createElement(
  // {String | Object | Function}
  // 一个 HTML 标签名、组件选项对象，或者
  // resolve 了上述任何一种的一个 async 函数。必填项。
  'div',

  // {Object}
  // 一个与模板中 attribute 对应的数据对象。可选。
  {
    // (详情见下一节)
  },

  // {String | Array}
  // 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，
  // 也可以使用字符串来生成“文本虚拟节点”。可选。
  [
    '先写一些文字',
    createElement('h1', '一则头条'),
    createElement(MyComponent, {
      props: {
        someProp: 'foobar',
      },
    }),
  ]
);
```

#### createElement 的 attribute

```ts
{
  // 与 `v-bind:class` 的 API 相同，
  // 接受一个字符串、对象或字符串和对象组成的数组
  'class': {
    foo: true,
    bar: false
  },
  // 与 `v-bind:style` 的 API 相同，
  // 接受一个字符串、对象，或对象组成的数组
  style: {
    color: 'red',
    fontSize: '14px'
  },
  // 普通的 HTML attribute
  attrs: {
    id: 'foo'
  },
  // 组件 prop
  props: {
    myProp: 'bar'
  },
  // DOM property
  domProps: {
    innerHTML: 'baz'
  },
  // 事件监听器在 `on` 内，
  // 但不再支持如 `v-on:key up.enter` 这样的修饰器。
  // 需要在处理函数中手动检查 keyCode。
  on: {
    click: this.clickHandler
  },
  // 仅用于组件，用于监听原生事件，而不是组件内部使用
  // `vm.$emit` 触发的事件。
  nativeOn: {
    click: this.nativeClickHandler
  },
  // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
  // 赋值，因为 Vue 已经自动为你进行了同步。
  directives: [
    {
      name: 'my-custom-directive',
      value: '2',
      expression: '1 + 1',
      arg: 'foo',
      modifiers: {
        bar: true
      }
    }
  ],
  // 作用域插槽的格式为
  // { name: props => VNode | Array<VNode> }
  scopedSlots: {
    default: props => createElement('span', props.text)
  },
  // 如果组件是其它组件的子组件，需为插槽指定名称
  slot: 'name-of-slot',
  // 其它特殊顶层 property
  key: 'myKey',
  ref: 'myRef',
  // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，
  // 那么 `$refs.myRef` 会变成一个数组。
  refInFor: true
}

```
# hoc
[button](https://juejin.im/post/6844903751057145869)


# ddd
```html
<input v-model="value" />
<input v-bind:value="value" v-on:input="value= $event.target.value" />
```



## vue

1. [Class 与 Style 绑定](https://cn.vuejs.org/v2/guide/class-and-style.html#绑定-HTML-Class)
```html
<div class="static" v-bind:class="{ 'class-a': isA, 'class-b': isB }"></div>
<div v-bind:class="classObject"></div>
<div v-bind:class="[classA, classB]">
<div v-bind:class="[classA, isB ? classB : '']">
<div v-bind:class="[classA, { classB: isB, classC: isC }]">
<!--绑定内联样式-->
<div v-bind:style="styleObject"></div>


<script>


//对象
data: {
  classObject: {
    'class-a': true,
    'class-b': false
  }
}

//数组
data: {
  classA: 'class-a',
  classB: 'class-b'
}

//绑定内联样式
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}

</script>
```


```html

<li class="index" v-for="(item, index) in banners" :key="index">
    <img :src="item.imgUrl">
</li>

<script>
import luan from './../assets/luan.jpg'
import mouse from './../assets/mouse.jpg'
import yellow from  './../assets/yellow.jpg'

export default{
    data(){
        return{
          banners: [
              { imgUrl: luan },
              { imgUrl: mouse },
              { imgUrl: yellow },
          ],
        }
    }
}

</script>
```
