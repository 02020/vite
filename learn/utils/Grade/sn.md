# 11

## collapse-builder-render 的数据格式
 
```ts
const collapse = [
  {
    label: '我是标题',
    name: 'dd',
    content: [
      {
        name: 'dd',
        value: 'ddd',
        label: '自定dom',
      },
      {
        name: 'dd',
        value: 'ddd',
        label: '自定dom',
      },
    ],
  },
];
```

## DEMO

### 厦门行政区数据

```html
<template>
  <builder :config="config" @cmd="onCommand" v-model="value">
    <template v-slot="data">
      <template v-for="(item, index) in data">
        <Button @click="onClick(index)" :key="index" type="text">{{
          item.label
        }}</Button>
      </template>
    </template>
  </builder>
</template>

<script>
import Builder from '@/src/components/adaptors/collapse-builder-render.js';
import config from '../../demoData/districtList';

const data = config[0].children.map((x) => {
  return {
    label: x.label,
    name: x.value,
    content: x.children.map((x) => {
      const { label, value } = x;
      return { label, value };
    }),
  };
});

export default {
  components: { Builder },

  data() {
    return { config: data, value: ['350203', '350205', '350211'] };
  },

  created() {},
  mounted() {},

  methods: {
    onClick(index) {
      const item = this.config[index];
      console.log(item);
    },
    onCommand(evt) {
      console.log(evt);
    },
  },
};
</script>


```
