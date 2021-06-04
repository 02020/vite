## 1.图形端

### postMessage.js

```ts
import Postmate from 'postmate'
const handshake = new Postmate.Model()
const postMessage = (name, args) => {
  handshake.then((postMessage) => {
    postMessage.emit(name, args)
  })
}

export default postMessage
```

### 在 main 中注入

```ts
import postMessage from './utils/postMessage'
Vue.prototype.postMessage = postMessage
```

### 分发事件( iframe )

```ts
// 对于组件中的 'http://192.168.3.91:8080/'
this.postMessage('e-map', { xmbsm, id })
```

## 2. 应用端

### 在组件中监听

```ts
const handshake = new Postmate({
  container: this.$el,
  url: 'http://192.168.3.91:8080/',
  name: 'e-map-iframe',
  classListArray: ['postmate']
})

handshake.then((child) => {
  const style = child.frame.style
  style.height = '100%'
  style.width = '100%'

  child.on('e-map', (data) => {
    console.log('来至地图的数据', data)
  })
})
```
