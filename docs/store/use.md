```ts
import { useMainStore } from '@/store';

const main = useMainStore();

return {
  // gives access to the whole store
  main,
  // gives access only to specific state
  state: computed(() => main.counter),
  // gives access to specific getter; like `computed` properties
  doubleCount: computed(() => main.doubleCount),
};
```
