<template>
  <div :class="cls" @click="onChange"></div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'v-test',

  props: {
    value: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  setup(props, { emit }) {
    const cls = computed(() => {
      return [
        'v-test',
        {
          active: props.value,
          disabled: props.disabled
        }
      ]
    })

    const onChange = (evt) => {
      console.log(evt)
      if (props.disabled) {
        return
      }
      // emit('input', !props.value)
      emit('update:value', !props.value)
      emit('change', evt)
    }

    return {
      cls,
      onChange
    }
  }
}
</script>

<style>
.v-test {
  border: 1px solid #fcf;
  height: 100px;
}
</style>
