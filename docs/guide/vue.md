## vue2 模板

```html
<template>
  <form
    class="el-form"
    :class="[
      labelPosition ? 'el-form--label-' + labelPosition : '',
      { 'el-form--inline': inline },
    ]"
  >
    <slot></slot>
  </form>
</template>
<script>
  export default {
    name: 'ElForm',
    componentName: 'ElForm',
    mixins: [],
    components: {},
    props: {
      model: Object,
      labelWidth: String,
      inline: Boolean,
      showMessage: {
        type: Boolean,
        default: true
      }
    },
    computed: {},
    watch: {
      rules() {}
    },
    data() {
      return {
        fields: []
      }
    },
    created() {},
    methods: {
      validate(callback) {}
    }
  }
</script>

<style></style>
```
