export default {
  authModuleList: [
    {
      moduleName: '标绘保存',
      moduleCode: 'markerSave',
      authID: '496138616573953',
      sysCode: 'gisDataServer'
    },
    {
      moduleName: '标绘保存',
      moduleCode: 'markerSave',
      authID: '252242916028715009',
      sysCode: 'gisDataServer'
    },
    {
      moduleName: '标绘导出',
      moduleCode: 'markerDownload',
      authID: '252242916028715009',
      sysCode: 'gisDataServer'
    },
    {
      moduleName: '标绘导入',
      moduleCode: 'markerUpload',
      authID: '252242916028715009',
      sysCode: 'gisDataServer'
    },
    {
      moduleName: '保存',
      moduleCode: 'save',
      authID: '496138616573952',
      sysCode: 'gisDataServer'
    },
    {
      moduleName: '保存',
      moduleCode: 'save',
      authID: '252242916028715009',
      sysCode: 'gisDataServer'
    },
    {
      moduleName: '打印',
      moduleCode: 'print',
      authID: '252242916028715009',
      sysCode: 'gisDataServer'
    },
    {
      moduleName: '打印',
      moduleCode: 'print',
      authID: '496138616573953',
      sysCode: 'gisDataServer'
    },
    {
      moduleName: '打印',
      moduleCode: 'print',
      authID: '496138616573952',
      sysCode: 'gisDataServer'
    },
    {
      moduleName: '拾取',
      moduleCode: 'pick-up',
      authID: '252242916028715009',
      sysCode: 'gisDataServer'
    },
    {
      moduleName: '拾取',
      moduleCode: 'pick-up',
      authID: '496138616573952',
      sysCode: 'gisDataServer'
    },
    {
      moduleName: '拾取',
      moduleCode: 'pick-up',
      authID: '496138616573953',
      sysCode: 'gisDataServer'
    }
  ],
  toolButtons: [
    {
      value: 'pull-prev',
      label: '上一视图',
      icon: 'ios-skip-backward',
      isShow: false, //官网还未推出
      isMultiple: true
    },
    {
      value: 'pull-next',
      label: '下一视图',
      icon: 'ios-skip-forward',
      isShow: false, //官网还未推出
      isMultiple: true
    },
    {
      value: 'contrast',
      label: '对比',
      icon: 'md-contrast',
      isShow: true,
      isMultiple: false,
      isRole: false
    },
    {
      value: 'measure',
      label: '量测',
      icon: 'ios-crop',
      isShow: true,
      isMultiple: false,
      isRole: false
    },
    {
      value: 'marker',
      label: '标绘',
      icon: 'md-flag',
      isShow: true,
      isMultiple: false,
      isRole: false
    },
    {
      value: 'pick-up',
      label: '拾取',
      icon: 'ios-locate',
      isShow: true,
      isMultiple: false,
      isRole: true
    },
    {
      value: 'shape-layer',
      label: 'Shape图层',
      icon: 'md-map',
      isShow: true,
      isMultiple: false,
      isRole: true
    },
    {
      value: 'print',
      label: '打印',
      icon: 'md-print',
      isShow: true,
      isMultiple: false,
      isRole: true
    },
    {
      value: 'feedback',
      label: '地图纠错',
      icon: 'md-eye',
      isShow: true,
      isMultiple: false,
      isRole: true
    },
    {
      value: 'save',
      label: '保存',
      icon: 'md-cloud-upload',
      isShow: false,
      isMultiple: false,
      isRole: true
    },
    {
      value: 'download',
      label: '下载',
      icon: 'md-cloud-download',
      isShow: false,
      isMultiple: false,
      isRole: true
    },
    {
      value: 'full-screen',
      label: '全屏',
      icon: 'md-expand',
      isShow: true,
      isMultiple: true, //是否复合操作，点击这个按钮，不影响其他工具栏
      isOnClick: false, //是否正在被点击 只有点击图标有差别需要配置
      clickLabel: '还原', //点击后的文字
      clickIcon: 'md-contract', //点击后的图标,
      isRole: false
    },
    {
      value: 'full-extent',
      label: '全图',
      icon: 'md-planet',
      isShow: true,
      isMultiple: true,
      isRole: false
    }
  ]
}
