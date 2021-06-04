import kit from '.';

const preprocessOptionsC = (context, isFunctional) => (key) => {
  return isFunctional ? context[key] || context.data[key] : context['$' + key];
};

// 求值x
const preX = (f, props, schema) => {
  let x = typeof f === 'function' ? f(props || {}) : schema;
  x = typeof x === 'function' ? x(schema) : x;
  return x;
};

// 增加事件函数
const handlerOn = (on, xKey) =>
  kit.fR((item) => {
    const _key = kit.toKeys(item, 2);
    return [_key[0], (...args) => on && on(_key[1], xKey, ...args)];
  });

/**
 * 处理插槽-测试未通过
 * @param {*} renderG
 * @param {*} x
 */
const scopedSlotsF = (renderG, scopedSlots, x) => {
  const slotsTemplateC = kit.fRo(kit.fxC((key) => scopedSlots[key]));

  // const slotsC = kit.fRo(kit.fxC(() => renderG));

  const _scopedSlots = {
    ...slotsTemplateC(x.slots || {}),
    // ...slotsC(x.slots || {}),
  };
  // console.log(x.component, _scopedSlots);
  // console.log('preprocessOptions', preprocessOptions('scopedSlots'));
  // console.log(x.component, x.slots);
  return _scopedSlots;
};

// 向渲染的组件传递作用域插槽
const slotsC = (slots, scopedSlots) => {
  if (!slots) return null;
  // console.log('slots', slots);
  // console.log('scopedSlots', scopedSlots);
  var resp = Object.keys(slots).reduce((acc, key) => {
    // console.log('scopedSlots[key]', slots[key]);

    acc[key] = (props) => {
      console.log('slotsC', props);
      if (Array.isArray(slots[key])) {
        return slots[key].map(scopedSlots[key]);
      } else {
        return scopedSlots[key](props);
      }
    };
    return acc;
  }, {});

  return resp;
};

/**
 * toRender
 * 带生命周期的组件 name = 'toRender'
 * * 底层组件不能采用函数式组件
 */
export const toRender = (f: any, components = null) => {
  let name = null;
  const ft = typeof f;
  if (ft === 'function') {
  } else if (ft == 'string') {
    name = f;
  }

  return {
    name,
    components,
    props: {
      f: {
        type: Function, // default: () => () => {},
      },
      on: Function,
      props: {
        type: Object,
        default: () => {},
      },
      schema: {
        type: [Array, Object],
        default: () => [],
      },
    },

    // render 函数封装-层级渲染
    render: function (h, __context) {
      const context = __context ? __context : this;
      const preprocessOptions = preprocessOptionsC(context, !!__context);
      const { f: _f, props, on, schema } = preprocessOptions('props');

      const scopedSlots = preprocessOptions('scopedSlots');
      // console.log('scopedSlots', scopedSlots);
      const x = preX(_f || f, props, schema);
      console.log('render');
      // 递归渲染
      const renderG = (x) => {
        if (!x || typeof x === 'string') {
          return x;
        }

        // console.log('x.slot', x.slot);

        let child;
        child = kit.fMap(renderG)(x.child);
        child = kit.of(child, !Array.isArray(child));

        // console.log('child', child);

        // if (scopedSlots[x.slot]) {
        //   child = scopedSlots[x.slot](x.params);
        //   return child;
        // } else {
        //   child = kit.fMap(renderG)(x.child);
        //   child = kit.of(child, !Array.isArray(child));
        // }

        // if (x.component === 'Panel') {
        //   debugger;
        // }

        const resp = h(
          x.component || 'div',
          {
            class: x.class,
            style: x.style,
            props: x.props,
            slot: x.slot, // 子组件名称
            attrs: x.attrs,
            on: !x.on ? {} : handlerOn(on, x.key)(x.on),
            // scopedSlots: scopedSlots,
            // scopedSlots: scopedSlotsF(renderG, scopedSlots, x), // 作用域插槽
          },
          child
        );
        // console.log('___执行了渲染___' + (x.component || 'div'));

        return resp;
      };

      return renderG(x);
    },
  };
};

/**
 * .vue
 *  components: { 'e-render': toComponent(toBuilder.toTable) }
  },
 * @param {*} f
 */
export const toComponent = (f, name) => ({
  functional: true,
  name: name || 'toComponent',
  props: ['props', 'on', 'schema'],
  render: function (h, context) {
    // console.log(context.props);
    const { props, on, schema } = context.props;
    return h(toRender(name || 'toComponent'), {
      props: { f, props, on, schema },
    });
  },
});

/*

  watch: {
    schema: {
      handler(val) {
        console.log('schema', val);
      },
      immediate: true,
      deep: true,
    },
  },

 context.$emit && context.$emit('cmd', _key[1], x, ...args);

toRenderComponent


    props: Object.assign(
      { model: { type: Object }, on: { type: Function } },
      props
    ),

  watch: {
    config: {
      handler(val) {
        console.log('config发生的变化', val);
      },
      deep: true,
    },
  },



let time = null;


  // 增加事件函数
const handlerOn = (on, xOn, xKey) =>
  xOn.reduce((acc, key) => {
    const _key = keyToOn(key, xKey);
    // console.log(_key);
    acc[_key[0]] = (...args) => {
      // context.$emit && context.$emit('cmd', _key[1], x, ...args);
      clearTimeout(time);
      on &&
        (time = setTimeout(() => {
          on(_key[1], _key[2], ...args);
        }, 200));
    };
    return acc;
  }, {});
  */
