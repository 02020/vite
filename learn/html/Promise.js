function Promise(fn) {
  this.cbs = [];

  // 回调函数的入参
  const resolve = (value) => {
    // 异步
    setTimeout(() => {
      this.data = value;
      this.cbs.forEach((cb) => cb(value));
    });
  };

  // 执行
  fn(resolve);
}

//
Promise.prototype.then = function (onResolved) {
  // 返回自己
  return new Promise((resolve) => {
    // cbs
    this.cbs.push(() => {
      //
      const res = onResolved(this.data);
      if (res instanceof Promise) {
        res.then(resolve);
      } else {
        resolve(res);
      }
    });
  });
};

new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 500);
})
  .then((res) => {
    console.log(res);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, 500);
    });
  })
  .then(console.log);
