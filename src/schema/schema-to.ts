/**
 * iview-卡片标题
 * @param {*} title
 * @param {*} extra
 */
export const Card = ({ title, extra, child }) => ({
  component: 'Card',
  child: [
    title && toSlot('title', title, [['click', 'click-title']]),
    extra && toSlot('extra', extra, [['click', 'click-extra']]),
    child,
  ],
});

/**
 * iview-折叠面板
 * @param {*} value
 */
export const Collapse = (value = []) => (child) => ({
  key: 'temp',
  component: 'Collapse',
  props: {
    value,
  },
  on: ['on-change', ['input', 'input-collapse']],
  child: child,
});

/**
 * iview-折叠面板-项
 * @param {*} name
 * @param {*} title
 */
export const Panel = ({ name, child, title = '标题' }, index) => ({
  component: 'Panel',
  props: { name: name || index },
  child: [title, toSlot('content', child)],
});

/**
 * iview-折叠面板-项
 * @param {*} name
 * @param {*} title
 */
export const PanelC = (name, title, index) => (child) =>
  Panel({ name, child, title }, index);

/**
 * iview-列表
 * @param {*} props
 */
export const List = (props) => (child) => ({
  component: 'List',
  style: props.style,
  class: props.class,
  props: {
    itemLayout: 'vertical',
    ...props,
  },
  child: child,
});
/**
 * iview-列表-列表项
 * @param {*} param0
 */
export const ListItem = ({ action, extra, avatar, title, description }) => {
  return {
    component: 'ListItem',
    child: [
      { slot: 'action', child: action }, // 只能这样配置
      { slot: 'extra', child: extra, on: [['click', 'click-extra']] }, // 只能这样配置
      {
        component: 'ListItemMeta',
        child: [
          {
            slot: 'avatar',
            child: avatar,
          },
          { slot: 'title', child: title },
          { slot: 'description', child: description },
        ],
      },
    ],
  };
};

/**
 *
 * @param {*} cb
 * @param {*} option 默认配置
 * @param {*} f 对默认配置option进行处理
 * @returns {Array} [option, option]
 * @demo 渲染本级
 */
export const fMap = (f, cb = (x) => x) => (list) => cb(list.map(f));

/**
 * iview-图标
 * @param {*} type
 * @param {*} size
 * @param {*} color
 */
export const Icon = (props) => {
  const { type, size = 30, color = '#2d8cf0' } = props;
  return {
    key: props.key || props.name,
    class: props.class,
    attrs: {
      title: props.title,
    },
    component: 'Icon',
    on: [['click', 'icon-click']],
    props: {
      type,
      size,
      color,
    },
  };
};

/**
 * iview-图标-主要供map函数使用
 * @param {*} size
 * @param {*} color
 */
export const IconC = (size = 30, color = '#2d8cf0') => ({ title, type }) =>
  Icon({ title, type, size, color });

/**
 * 带卡片样式的折叠面板
 * @param {*} props
 */
export const toCollapseCard = (props) =>
  fMap(
    (x, index) => fMap(Card, PanelC(x.name, x.title, index))(x.child),
    Collapse(props.value)
  );

/**
 * 折叠面板
 * @param {*} props
 */
export const toCollapse = (props) => fMap(Panel, Collapse(props.value));

/**
 * 列表
 * @param {*} fStyle
 */
export const toList = (props, fStyle) =>
  fMap((x) => ListItem(fStyle(x)), List(props));

// 组件的配置清单，供Render使用
export const toSlot = (name, child, on = []) => ({
  slot: name,
  child: child,
  on,
});

/**
 *
 * @param {*} item
 * @param {*} _class
 */
const toStyle = (item, _class = '') => (child) => {
  return {
    class: (item.class || item) + _class,
    style: item.style,
    child: child,
  };
};

/**
 * 1-表格
 * @param {*} param0
 */
export const toETable = ({ table, row, col }) =>
  fMap(toRow({ row, col }), toStyle(table));

/**
 * 2-表格-行
 * @param {*} param0
 */
export const toRow = ({ row, col }) => fMap(toCol(col), toStyle(row));

/**
 * 3-表格-列
 * 待完善与优化
 * @param {*} col
 */
export const toCol = (col) => (cell) => {
  // 数据格式转换, x为数组
  const [key, _class, child] = cell;
  return {
    on: ['click'],
    key,
    style: col.style,
    class: col.class || col + _class,
    child,
  };
};
