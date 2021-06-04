import { fMap, Icon, toAdaptor } from '.';

/**
 * 单选框
 * @param {*} props
 */
const RadioGroup = (props) => (child) => {
  return {
    key: props.key || props.name,
    component: 'RadioGroup',
    on: [['input'], ['on-change', 'radio-change']],
    props: props,
    child,
  };
};

const Radio = ({ label, value }) => {
  return {
    component: 'Radio',
    props: {
      label: value,
    },
    child: label,
  };
};

/**
 * 多选框
 * @param {*} props
 */
const CheckboxGroup = (props) => (child) => {
  return {
    key: props.key || props.name,
    component: 'CheckboxGroup',
    on: [['input'], ['on-change', 'checkbox-change']],
    props: props,
    child,
  };
};

const Checkbox = ({ label, value }) => {
  return {
    component: 'Checkbox',
    props: {
      label: value,
    },
    child: label,
  };
};

/**
 * 选择器
 * @param {*} props
 */
const Select = (props) => (child) => {
  return {
    key: props.key || props.name,
    component: 'Select',
    on: [['input'], ['on-change', 'select-change']],
    props: props,
    child,
  };
};

/**
 * 选择器-选项
 * @param {*} props
 */
const Option = (o) => {
  let label;
  let value;
  if (typeof o === 'string') {
    label = value = o;
  } else {
    label = o.label;
    value = o.value;
  }
  return {
    component: 'Option',
    props: {
      value,
    },
    child: label,
  };
};

const Form = (props) => (child) => {
  return {
    component: 'Form',
    props: props,
    child,
  };
};

// input事件如果和render一起使用会存在问题: 页面重新渲染太快
export const toInput = (props) => () => {
  return {
    key: props.key || props.name,
    component: 'Input',
    on: [
      ['on-change', 'change'],
      ['on-blur', 'blur'],
      ['on-enter', 'enter'],
      ['on-clear', 'input-clear'],
    ],
    props: props,
  };
};

// 开关
export const toSwitch = (props) => () => {
  return {
    key: props.key || props.name,
    component: 'Switch',
    on: [['on-change', 'switch-change']],
    props: props,
  };
};

export const toRadio = (props) => fMap(Radio, RadioGroup(props));
export const toCheckbox = (props) => fMap(Checkbox, CheckboxGroup(props));
export const toSelect = (props) => fMap(Option, Select(props));

// 更新全部
export const toForm = (props) => fMap(toFormItem, Form(props));

// 更新局部
export const toForm2 = (props) =>
  fMap((x) => {
    return {
      component: 'e-form-item',
      props: {
        props: x,
      },
    };
  }, Form(props));

const Button = (props) => {
  return {
    key: props.key || props.name,
    component: 'Button',
    on: [['click', 'btn-click']],
    props: props,
    child: props.text || '',
  };
};

const ButtonGroup = (props) => (child) => {
  return {
    component: 'ButtonGroup',
    props: props,
    child,
  };
};

// 按钮组
export const toButton = (props) => fMap(Button, ButtonGroup(props));

/**
 *
 */
export const toIcon = () => fMap(Icon, (x) => ({ child: x }));

// 判断组件是否表单组件
const isFormItem = (schema) => {
  if (!schema.component) return true;
  return ['select', 'input', 'checkbox', 'radio'].includes(schema.component);
};

/**
 * toFormItem
 * props 传入空值
 */
export const toFormItem = (schema) => {
  let child = toAdaptor(schema);

  // 根据属性判断属性-label
  if (schema.label) {
    child = {
      component: 'FormItem',
      props: { prop: schema.name, label: schema.label },
      child,
    };
  }

  // 根据属性判断属性-span
  if (schema.span) {
    return {
      component: 'Col',
      child,
      props: {
        span: schema.span,
      },
    };
  }

  return child;
};

/*


  toSelect,
  toInput,
  toRadio,
  toCheckbox,

  */
