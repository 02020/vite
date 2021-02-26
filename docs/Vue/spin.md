[**iviewUI**](https://www.iviewui.com/components/spin)

[[toc]]

## 闪念胶囊

### 属性验证 & 动态样式

```ts
const good = {
  props: {
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default() {
        return !this.$IVIEW || this.$IVIEW.size === ''
          ? 'default'
          : this.$IVIEW.size
      }
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-fix`]: this.fix,
          [`${prefixCls}-show-text`]: this.showText,
          [`${prefixCls}-fullScreen`]: this.fullScreen
        }
      ]
    }
  }
}
```

## 完整代码

### html-结构

```vue
<template>
  <transition name="fade">
    <div :class="classes" v-if="fullScreenVisible">
      <div :class="mainClasses">
        <span :class="dotClasses"></span>
        <div :class="textClasses"><slot></slot></div>
      </div>
    </div>
  </transition>
</template>
<script>
import { oneOf } from '../../utils/assist'
import ScrollbarMixins from '../modal/mixins-scrollbar'

const prefixCls = 'ivu-spin'

export default {
  name: 'Spin',
  mixins: [ScrollbarMixins],
  props: {
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default() {
        return !this.$IVIEW || this.$IVIEW.size === ''
          ? 'default'
          : this.$IVIEW.size
      }
    },
    fix: {
      type: Boolean,
      default: false
    },
    fullScreen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showText: false,
      // used for $Spin
      visible: false
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-fix`]: this.fix,
          [`${prefixCls}-show-text`]: this.showText,
          [`${prefixCls}-fullScreen`]: this.fullscreen
        }
      ]
    },
    mainClasses() {
      return `${prefixCls}-main`
    },
    dotClasses() {
      return `${prefixCls}-dot`
    },
    textClasses() {
      return `${prefixCls}-text`
    },
    fullScreenVisible() {
      return this.fullScreen ? this.visible : true
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.addScrollEffect()
      } else {
        this.removeScrollEffect()
      }
    }
  },
  mounted() {
    this.showText = this.$slots.default !== undefined
  }
}
</script>
```

### spin 实例化

```ts
import Vue from 'vue'
import Spin from './spin.vue'

// 全局变量
let transferIndex = 0
function transferIncrease() {
  transferIndex++
}

function handleGetIndex() {
  transferIncrease()
  return transferIndex
}
// 元素的堆叠顺序
let tIndex = handleGetIndex()

Spin.newInstance = (properties) => {
  const _props = properties || {}

  const Instance = new Vue({
    data: Object.assign({}, _props, {}),
    render(h) {
      let vnode = ''
      // 自定义渲染函数
      if (this.render) {
        const attribute = {
          props: {
            fix: true,
            fullScreen: true
          }
        }
        // h 给外部定义的render函数使用
        vnode = h(Spin, attribute, [this.render(h)])
      } else {
        const attribute = {
          props: {
            size: 'large',
            fix: true,
            fullScreen: true
          }
        }

        vnode = h(Spin, attribute)
      }
      return h(
        'div',
        {
          class: 'ivu-spin-fullScreen ivu-spin-fullScreen-wrapper',
          style: {
            'z-index': 2010 + tIndex
          }
        },
        [vnode]
      )
    }
  })

  const component = Instance.$mount()
  // 挂载在全局
  document.body.appendChild(component.$el)
  const spin = Instance.$children[0]

  return {
    show() {
      spin.visible = true
      tIndex = handleGetIndex()
    },
    remove(cb) {
      spin.visible = false
      setTimeout(function () {
        // 销毁
        spin.$parent.$destroy()
        if (
          document.getElementsByClassName('ivu-spin-fullScreen')[0] !==
          undefined
        ) {
          // 移除
          document.body.removeChild(
            document.getElementsByClassName('ivu-spin-fullScreen')[0]
          )
        }
        cb()
      }, 500)
    },
    component: spin
  }
}

export default Spin
```

### index-入口

```ts
import Spin from './spin.js'

// 单例
let spinInstance

function getSpinInstance(render = undefined) {
  spinInstance = spinInstance || Spin.newInstance({ render: render })

  return spinInstance
}

function loading(options) {
  const render = 'render' in options ? options.render : undefined
  let instance = getSpinInstance(render)

  instance.show(options)
}

Spin.show = function (props = {}) {
  return loading(props)
}
Spin.hide = function () {
  if (!spinInstance) return false

  const instance = getSpinInstance()

  instance.remove(() => {
    spinInstance = null
  })
}

export default Spin
```

## 应用

```ts
const props = {
  // h: 回调入参
  render: (h) => {
    return h('div', [
      h('Icon', {
        class: 'demo-spin-icon-load',
        props: {
          type: 'ios-loading',
          size: 18
        }
      }),
      h('div', 'Loading')
    ])
  }
}
this.$Spin.show(props)
```
