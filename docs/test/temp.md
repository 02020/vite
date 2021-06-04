```ts



    const on = function (index) {
      console.log(index);
      return function (key) {
        console.log(key, index);
      };
    };

    // const renderRowButtonDown = ({ on }) => (h, params) => {
    //   // console.log('renderRowButtonDown', params);
    //   return renderC(h)({
    //     on: on,
    //     schema:
    //   });
    // };

    const dd = (x) => {
      !!x._schema &&
        (x.render = (h, params) => {
          // console.log('params', params);
          const i = params.index;

          const t = on(i);

          // 如果是数组则认为是按钮组
          if (Array.isArray(x._schema)) {
            x._schema = toRowBttons({ on: t })(x._schema);
          }

          return renderC(h)({
            schema: x._schema,
          });
        });

      return x;
    };

    const renderRowButton = kit.toObjectArray(['title', 'key', 'width', 'class', '_schema']);

    const columns = renderRowButton(this.columns);

  const render = renderC(h);
return render({
      schema: toTablePage({
        class: 'ivu-height-36 ',
        columns,
        data: this.currentData,
        on: {
          onPage: this.onPage,
        },
        total: this.total,
        pageSize: this.pageSize,
        // page:{
        //   size,
        //   pageSize
        //   current
        //   disabled
        //  total: 100,
        // }
      }),
    });
```




```ts
  return h('Table', {
      props: {
        columns: [
          {
            title: 'Date',
            key: 'id',
          },
          {
            title: 'Name',
            key: 'name',
            render: (h, params) => {
              return h(
                'Button',
                {
                  props: {
                    type: 'error',
                    size: 'small',
                  },
                  on: {
                    click: () => {
                      on(params)('S');
                    },
                  },
                },
                'Delete'
              );
            },
          },
        ],
        data: this.data,
      },
    });
```

```ts


      /** 处理 基本信息 */
      // infoC: Function as PropType<(arg: boolean) => void>,

      resp.render = (h, params) => {
        // console.log('params', params);
        const i = params.index;

        const t = on(i);

        // 如果是数组则认为是按钮组
        if (Array.isArray(x._schema)) {
          x._schema = toRowBttons({ on: t })(x._schema);
        }

        return renderC(h)({            schema: x._schema        });

      }

      ```