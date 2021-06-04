1. [HTML DOM Element 对象](http://www.w3school.com.cn/jsref/dom_obj_all.asp)


```ts
//找到 div1
var div1 = document.getElementById("div1");
//创建 一个 p标签
var p = document.createElement('p');
//创建一个文本节点
var p1txt = document.createTextNode('p1');
p.appendChild(p1txt);
//添加节点
div1.appendChild(p);
//删除节点div2
var div2 = document.getElementById('div2');
//自己把自己干掉
div2.parentNode.removeChild(div2);
```



### 动态添加css
```ts

function __$styleInject (css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);

  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

__$styleInject("*,body{box-sizing:border-box;margin:0}body{padding:32px;padding:2rem;color:#444;font-family:sans-serif;font-size:18px;background-image:linear-gradient(180deg,#efefff 0,#fff);background-repeat:no-repeat}body *+*{margin-top:16px;margin-top:1rem}h1{color:#111}.debug:before{content:\"Script Output:\";display:block;font-family:sans-serif;font-size:50%;letter-spacing:.1em;text-transform:uppercase}.debug__output{display:block;margin-top:4px;margin-top:.25rem;padding:16px;padding:1rem;background-color:#fff;border:1px solid #d0d0d0;font-size:80%}.credits{color:#a2a2a2;font-size:75%;text-align:center}.credits a{color:inherit}", undefined);


```



```ts
document.addEventListener('DOMContentLoaded', (e) => {});
```