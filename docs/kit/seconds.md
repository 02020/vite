### orderBy - 排序对象数组

```ts
const users = [
  { name: 'fred', age: 48 },
  { name: 'barney', age: 36 },
  { name: 'fred', age: 40 }
]
orderBy(users, ['name', 'age'], ['asc', 'desc']) // [{name: 'barney', age: 36}, {name: 'fred', age: 48}, {name: 'fred', age: 40}]
orderBy(users, ['name', 'age']) // [{name: 'barney', age: 36}, {name: 'fred', age: 40}, {name: 'fred', age: 48}]
```

### once - 确保函数只被调用一次

```ts
const startApp = function (event) {
  console.log(this, event) // document.body, MouseEvent
}
document.body.addEventListener('click', once(startApp)) //
```


## 从数组中移除函数为真的元素。

###
```ts
const list = [
  { id: 1, name: '1' },
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 2, name: '2' }
]

const resp = []
remove(
  list,
  (x) => x.id == 1,
  (val) => {
    resp.push(val)
  }
)
console.log(resp)
```
