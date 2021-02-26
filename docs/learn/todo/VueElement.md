# 组件应用
el-input 组件不支持 按键事件，例如：回车   <input @keyup.enter="handleEnter">

## js
1. [throttle和debounce](http://www.tuicool.com/articles/67bA3iA)
1. [throttle.js](https://github.com/niksy/throttle-debounce/blob/master/throttle.js)


## css
1. [](https://github.com/Molunerfinn/theme-default)

### carousel
main

```javascript

updateItems() {
  this.items = this.$children.filter(child => child.$options.name === 'ElCarouselItem');
},

```