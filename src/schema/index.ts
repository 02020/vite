export * from '../lib/kit';
export * from './schema-to';

import {
  toIcon,
  toButton,
  toInput,
  toRadio,
  toSwitch,
  toCheckbox,
  toSelect,
  toForm,
  toFormItem,
} from './schema-form';

// iview-table
import { toTable } from './schema-table';

export {
  toComponent,
  toRender,
  // toFunctional,
} from './schema-render';

//  获取[toXXX]组件
const preBuilder = (component = 'input') =>
  toBuilder['to' + component.slice(0, 1).toUpperCase() + component.slice(1)];

// 适配
const toAdaptor = (schema) => {
  const { name, component, child = [], ...props } = schema;
  const builder = preBuilder(component);
  // 原生组件
  if (!builder) {
    throw new Error('组件不存在:' + component);
  }
  return builder(props)(child);
};

const toBuilder = {
  toIcon,
  toButton,
  toInput,
  toRadio,
  toSwitch,
  toCheckbox,
  toSelect,
  toForm,
  toFormItem,
  toAdaptor,
  toTable,
};

export {
  toBuilder,
  toIcon,
  toButton,
  toInput,
  toRadio,
  toSwitch,
  toCheckbox,
  toSelect,
  toForm,
  toFormItem,
  toAdaptor,
  toTable,
};
export default toBuilder;
/*

   return {
      component: component,
      props: schema.props,
      child: schema.child,
    };
*/
