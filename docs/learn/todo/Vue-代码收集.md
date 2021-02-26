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
