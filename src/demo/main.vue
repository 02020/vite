<template>
  <div class="nav-wrapper">
    <ul>
      <li @click="getPath(item)" v-for="item in state.list" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'demo',
  setup() {
    const state = reactive({
      list: ['a', 'b', 'c','d']
    })

    const getPath = (name) => {
      console.log('点击了:', name)
    }

    return {
      state,
      getPath
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
