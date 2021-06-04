import { fMap } from '.';
// 带表单组件的表格

const renderColumnFormItem = (on, x) => (h, params) => {
  const { column, index, row } = params;
  const value = row[column.key];
  let time = null;
  return h('e-form-adaptor', {
    props: {
      props: { value: value, ...x },
      on: (...args) => {
        if (typeof args[2] != 'object') {
          const cell = [index, column.key, args[2]];
          on('row', cell, params, args);
        }
        console.log(params, args);
      },
    },
  });
};

// 动态渲染-根据值来渲染列
const renderColumn = (on, x) => (h, params) => {
  const { column, index, row } = params;
  const value = row[column.key];

  const __key = row[x.renderFromKey];
  if (!x.schema[__key])
    return renderColumnFormItem(on, x.schema['default'])(h, params);

  let time = null;
  return h('e-form-adaptor', {
    props: {
      props: { value: value, ...x.props },
      schema: x.schema[__key],
      on: (...args) => {

        if (typeof args[2] != 'object') {
          const cell = [index, column.key, args[2]];

          on('row', cell, params, args);
        }
        console.log(params, args);
      },
    },
  });
};

// iview的表格
export const toTableColumns = ({ on } = {}) =>
  fMap((x) => {
    let resp = {
      title: x.title,
      key: x.name,
    };

    if (x.component) {
      resp.render = renderColumnFormItem(on, x);
    } else if (x.schema) {
      resp.render = renderColumn(on, x);
    }
    return resp;
  });

export const toTable = (props) => () => {
  if (!props.columns || props.columns.length === 0) {
    console.error('表格数据异常', props);
  }
  return {
    component: 'Table',
    on: [
      ['on-row-click', 'row-click'],
      ['on-row-dblclick', 'row-dblclick'],
    ],
    props: {
      ...props,
      columns: toTableColumns({ on: props.on })(props.columns),
    },
  };
};
