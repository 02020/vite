```ts

module.exports = {
  // base: '/vui-vc-next/docs', // base url for build
  lang: 'en-US',
  title: 'KIT docs',
  description: 'The docs of KIT',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'bluepower/vui-vc-next',
    repoLabel: 'VUI.next',
    docsDir: 'docs',

    editLinks: false,
    editLinkText: 'Edit this page on GitHub',

    nav: [
      {
        text: 'KIT',
        link: '/'
      }
    ],

    sidebar: {
      '/': getConfigSidebar(),
      '/components/': getConfigSidebar()
    }
  }
}

```