```ts
import { toRender } from './packages/UI/grade-builder';
import Layout from './packages/UI/Layout';
```
```html
<toRender :f="null" :schema="schema" @cmd="onCMD">
  <template v-slot:header>
    <h1>{{ title }}</h1>
  </template>
  <template v-slot:sidebar>
    <h1>siderbar</h1>
  </template>

  <template v-slot:main>
    <button @click="onClick">点击</button>
    <h1>Here might be a page title</h1>
  </template>
</toRender>
```

```ts
// schema: Layout.toLayout(),
const toLayout = () => ({
  class: 'flex flex-col h-screen bg-gray-200 font-roboto overflow-hidden',
  child: [
    {
      component: 'header',
      class:
        'flex justify-between items-center py-4 px-6 bg-white border-b-2 border-indigo-600',
      child: {
        slot: 'header'
      }
    },
    {
      class: 'flex flex-row h-full',
      child: [
        {
          slot: 'sidebar'
        },
        {
          class: 'flex-1 overflow-x-hidden overflow-y-auto bg-gray-200',
          child: {
            slot: 'main'
          }
        }
      ]
    }
  ]
})
```
