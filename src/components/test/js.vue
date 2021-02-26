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
import kit from '../../kit'
/** 标准格式   */
const test = () => {
  /** 数据   */
  const config = [
    // label, key, value
    ['名称', 'A'],
    ['地址', 'B'],
    ['联系人', 'C'],
    ['联系方式', 'D'],
    ['姓名', 'EE']
  ]
  // 以info的key为准
  const info = { A: '_A_', B: '_B_', C: '_C_', D: '_D_' + +new Date() }

  /** 方法 */
  const toInfo = (config) => {
    const info = kit.fR((item) => [item[1], item[0]])(config)

    return kit.fR((key, value) => ({ label: info[key], key, value }), [])
  }

  /** 结果 */
  const resp = toInfo(config)(info)

  /** 函数返回 */
  return {
    params: {
      config,
      info
    },
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
      state.params = log.params
      state.resp = log.resp
      console.log(props.js);
    }

    return { state, onClick }
  }
}
</script>
