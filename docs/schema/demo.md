```vue
<template>
  <div>
    <e-collapse-multi :apis="apis" :schema="schema" @cmd="onCMD" />
  </div>
</template>

<script lang="ts">
  // 幢号申请
  import { defineComponent } from '@vue/composition-api';
  import { LandCancel as Schema } from './schema';
  import API from '@/api';

  export default defineComponent({
    setup() {
      const apis = {
        query: API.LandManage.queryPrepareLand,
        info: API.LandManage.queryPrepareInfo,
      };

      const onCMD = (name, code) => {
        console.log(name, code);
      };

      return {
        apis,
        onCMD,
        schema: Schema.CollapseMulti,
      };
    },
  });
</script>
```
