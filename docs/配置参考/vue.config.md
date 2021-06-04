```ts


const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 配置路径别名
  configureWebpack: {
    devServer: {
      port: 9090, //9999
      // 调试时允许内网穿透，让外网的人访问到本地调试的H5页面
      disableHostCheck: true,
    },
    // resolve: {
    //   alias: {
    //     kit: resolve('common/kit.js'),
    //   },
    // },
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     kit: 'kit',
    //   }),
    // ],
  },
  //productionSourceMap: false,
  // devServer: {
  //   proxy: {
  //     '/prefix/api/user/list': {
  //       target: 'https://api-remote.xxxx.com',
  //       pathRewrite: {
  //         '^/prefix': ''
  //       }
  //     }
  //   },
  // }
};

```