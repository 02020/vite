const kit = require('./er2.es.js')
const viteConfig = require('../../vite.config');

const toChild = (path = '') =>
  kit.fR((item, i, acc, o) => {
    const keys = kit.repeat(item)
    return { text: keys[0], link: path + keys[1] }
  }, [])

const toChildren = (path) => (key, item, index, acc) => {
  return {
    text: key,
    children: toChild(path)(item.map((x) => x[1]))
  }
}

const toGroup = (path) => (list) => {
  let temp = kit.toGroup(0)(list)
  return kit.fR(toChildren(path), [])(temp)
}

module.exports = {
  // base: '/vui-vc-next/docs', // base url for build
  lang: 'en-US',
  title: 'KIT docs',
  alias: viteConfig.alias.reduce((prev, next) => {
    prev[next.find] = next.replacement;
    return prev;
  }, {}),
  description: 'The docs of KIT',
  markdown: {
    lineNumbers: false,
    config: (md) => {
      // use more markdown-it plugins
      // md.use(require('markdown-it-xxx'))
      const { demoBlock, demoCode } = require('./plugins/md-loader')
      demoBlock(md)
      demoCode(md) // 代码高亮的语言默认为vue，可传入第二个参数自定义语言 demoCode(md, 'html')
    }
  },
  themeConfig: {
    docsDir: 'docs',
    nav: toChild()([
      ['首页', '/'],
      ['KIT', '/kit/'],
      ['指南', '/guide/'],
      ['库', '/shared/'],
      ['vite', '/Vue/'],
      ['组件', '/schema/'],
      ['第三方', '/third/'],
      ['掘金', 'https://e.juejin.cn/'],
      ['stars', 'https://github.com/02020?tab=stars'],
      ['test', '/test/'],
      ['java', '/java/'],
    ]),
    sidebar: {
      '/kit/': toChild('/kit/')([
        ['fR'],
        ['fRo'],
        ['fRa'],
        ['formItemC'],
        ['toGroup'],
        ['综合应用'],
        ['reduce']
      ]),
      '/Vue/': toGroup('/Vue/')([['完整', 'spin']]),
      '/third/': toChild('/third/')([
        //
        ['R'],
        ['Jquery'],
        ['seconds'],
        ['seconds-Adapter']
      ]),
      '/guide/': toGroup('/guide/')([
        ['常规', 'usage'],
        //
        ['模板', 'vue']
      ]),
      // 库
      '/shared/': toGroup('/shared/')([
        ['基础', 'Array'],
        ['基础', 'dom'],
        ['基础', 'es6'],
        ['基础', 'localStorage'],
        ['基础', 'Map'],
        ['基础', 'Object'],
        ['基础', 'String'],
        //
        ['lib', 'Utils'],
        ['lib', 'axios'],
        ['lib', 'MapBox'],
        ['lib', 'validate'],
        ['基础', 'date'],
      ]),
      '/test/': toGroup('/test/')([
        ['首页', 'index'],
        ['测试', '1'],
        ['测试', '2'],
      ]),
      '/java/': toGroup('/Java/')([
        ['首页', 'index'],
        ['AOP', 'aop'],
      ]),
      '/functional/': toGroup('/functional /')([
        ['首页', 'ch1'],
        ['测试', 'ch2'],
        ['测试', 'ch3'],
        ['测试', 'ch4'],
        ['测试', 'ch5'],
        ['测试', 'ch6'],
        ['测试', 'ch7'],
        ['测试', 'ch8'],
        ['测试', 'ch9'],
        ['测试', 'ch10'],
        ['应用', 'ch11'],
      ]),
      '/schema/': toGroup('/schema/')([
        ['组件', 'components'],
        ['组件', 'table'],
        ['组件', 'form'],
        ['组件', 'tree'],
        ['应用', 'demo'],
      ]),
      '/test/': toGroup('/test/')([
        ['首页', 'index'],
        ['测试', '1'],
        ['测试', '2'],
      ]),
    }
  }
}
// onion
