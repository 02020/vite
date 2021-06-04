import Vue from 'vue';
import { toBuilder, toComponent } from '.';

// 组件注册
const toRegister = ([name, f]) => Vue.component(name, toComponent(f, name));

const registerList = [
  ['e-form', toBuilder.toForm],
  ['e-form-adaptor', toBuilder.toAdaptor],
];

registerList.map(toRegister);
