
# [ECMAScript 6 入门](http://es6.ruanyifeng.com/)



1. [异步编程-Promise](http://es6.ruanyifeng.com/#docs/promise)
>[实例](http://www.cnblogs.com/qq9694526/p/5714124.html)
[其他-1](http://www.jianshu.com/p/063f7e490e9a)





## async

```ts
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value)
}

asyncPrint('hello world', 50);
```

```ts

console.log('dd');

/** @format */

// let unique = [...new Set(arr)];
// let unique = [...[2],...[3]];

const set = new Set([
  [1, 12, 13],
  [1, 22, 23],
]);

const m1 = new Map(set);

m1.set("32",11)
m1.set("32",12)
m1.set("12",12)
m1.set("22",22)

console.log(m1);

debugger
const set1 = new Set();

var arr = [1, 12, 13];

set1.add(arr);
set1.add(arr);
set1.add([1, 12, 13]);
set1.add([1, 12, 13]);

const d = 1 << 3;

// console.log(arr.indexOf(11) >-1);
// console.log(arr.indexOf(1) >-1);

const group= "a,d,c";
const exclude= ""

const f = (x) => {
  return group.indexOf(x.group) > -1 && (!exclude ? true : exclude.indexOf(x.id) < 0);
};

const layerList= [

  {group:'a',id:1},
  {group:'b',id:2},
  {group:'d',id:4},

]

let resp  = layerList.filter(f).map((x) => x.id);
console.log(resp);


```