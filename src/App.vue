<template>
  <div class="main-wrapper">
    <router-view />
  </div>
</template>

<script>
import './assets/misc/vui-responsive'

export default {
  name: 'vui-app'
}
</script>

<style scoped>
.main-wrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #546E7A;
  font-size: 0.25rem;
}
</style>
