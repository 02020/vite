import { toComponent } from './grade-builder';
const toSidebarC = (style) => (props) => (schema) => {
  const child = schema.map((x) => {
    const [key, name, type, title] = x;
    return {
      key,
      attrs: {
        title: title,
      },
      class:
        style.commonClass +
        (props.value == x[0] ? style.activeClass : style.inactiveClass),
      on: ['click'],
      child: [
        {
          component: 'Icon',
          class: 'py-1',
          props: {
            type,
            size: style.size,
          },
        },
        { child: name },
      ],
    };
  });

  return {
    key: 'sidebar',
    class: style.sidebarClass,
    child,
  };
};
export const toSidebar = toSidebarC({
  sidebarClass:
    'fixed z-30 left-0 w-16 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0',
  commonClass: ' py-2 px-2 block border-l-4 text-center ',
  inactiveClass:
    'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100',
  activeClass: 'bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100',
  size: 32, // 图标大小
});

export const ESidebar = toComponent(toSidebar);

export default {
  ESidebar,
  toSidebar,
};
