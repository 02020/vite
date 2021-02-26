```ts
const app = {
  callback(ctx) {
    console.log(ctx)
  },

  use(fn) {
    app.middleware = app.middleware || []
    app.middleware.push(fn)
  },

  go(ctx = {}) {
    app.middleware = app.middleware || []
    return app.middleware.reduceRight(
      (p, c) => () => c(ctx, p),
      () => app.callback(ctx)
    )()
  }
}

app.use((ctx, next) => ((ctx.name = 'Lucy'), next()))
app.use((ctx, next) => ((ctx.age = 12), next()))
app.use((ctx, next) => {
  console.log(`${ctx.name} is ${ctx.age} years old.`) // => Lucy is 12 years old.
  next()
})

// ... 任意调用 use 插入中间件
app.go({ sex: 1 }) // => 启动执行，最后会调用 callback 打印 => { name: 'Lucy', age: 12  }
```
