<template>
  <div class="nav-wrapper">
    <button @click="onClick">按钮</button>
  </div>
  <p>
    入参<br />
    {{ state.params }}
  </p>
  <hr />
  <p>
    结果<br />
    {{ state.resp }}
  </p>
</template>

<script>
import { reactive } from 'vue'

// 修改了 .js 文件后需要手动刷新一下
// 全局注册: kit

const resp = []
/** 标准格式   */
const test = () => {
  /** 数据   */
  const { fR } = kit



  const pairs1 = {
    key1: 'a1',
    value1: '1'
  }

  const pairs2 = {
    key2: 'a2',
    value2: '2'
  }

  const fc = (arg1, arg2) => {
    return { [arg1]: arg2 }
  }

  const list = [
    [pairs1, ['key1', 'value1'], ['k1', 'v1']],
    [pairs2, ['key2', 'value2'], ['k2', 'v2']],
    [fc, 'arg1', 'arg2']
  ]

  // 数据合并
  const toCombine = (list) => {
    const isFunction = (val) => typeof val === 'function'

    const propC = (source) => (key, target) => {
      if (Array.isArray(key)) {
        return key.reduce((acc, curr, index) => {
          acc[target[index]] = source[curr]
          return acc
        }, {})
      } else {
        return { target: source[key] }
      }
    }

    return list.reduce((acc, curr) => {
      let t
      const f = curr[0]
      if (isFunction(f)) {
        t = curr.shift(f).apply(f, curr)
      } else {
        const [source, key, target] = curr
        t = propC(source)(key, target)
      }

      return { ...acc, ...t }
    }, {})
  }

  const resp = toCombine(list)
  console.log(resp)

  /** 函数返回 */
  return {
    params: {},
    resp
  }
}

/*



*/
// 默认内容
export default {
  props: {
    js: String
  },
  setup(props, { emit }) {
    const log = test()
    const state = reactive({
      params: log.params,
      resp: log.resp
    })
    const onClick = () => {
      const log = test()
      console.log(log.resp)
    }

    return { state, onClick }
  }
}
</script>
