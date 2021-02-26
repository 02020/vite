var config = {
  MSG_INVALID_VALUE: '服务过期',
  URL_INVALID: '/errors/invalid.html',
  CSS_SELECTED: 'selected'
};

/**
 * * sfasdfsadfasdfa
 * ! asdfasdfasdfa
 *
 */
var hardcoded = (function (w) {
  'use strict' // 严格模式
  function hasClass () {}
  function removeClass () {}
  function addClass () {}
  return {

    validate: function (value) {
      if (!value) {
        w.alert(config.MSG_INVALID_VALUE);
        w.location.href = config.URL_INVALID;
      }
    },

    toggleSelected: function (element) {
      if (hasClass(element, config.CSS_SELECTED)) {
        removeClass(element, config.CSS_SELECTED);
      } else {
        addClass(element, config.CSS_SELECTED);
      }
    }
  };
})(window)

hardcoded.validate();

// 原始方法
(function (log) {
  'use strict';
  var arr = [10, 3, 7, 9, 100, 20], sum = 0, i;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  log('The sum of array ' + arr + ' is: ' + sum)
}(window.console.log));

// 函数式编程
(function (log) {
  'use strict';
  var arr = [10, 3, 7, 9, 100, 20];

  var sum = arr.reduce(function (prevValue, currentValue) {
    return prevValue + currentValue;
  }, 0);

  log('The sum of array ' + arr + ' is: ' + sum);
  // ie9 以上支持语法 forEach  every isArray  map  filter  reduce  some
}(window.console.log));

var Mediator = (function () {
  'use strict';
  var _msg = {};
  return {
    register: function (type, action) {
      if (_msg[type]) {
        _msg[type].push(action);
      } else {
        _msg[type] = [];
        _msg[type].push(action);
      }
    },
    send: function (type) {
      if (_msg[type]) {
        for (var i = 0, len = _msg[type].length; i < len; i++) {
          _msg[type][i] && _msg[type][i]();
        }
      }
    }
  }
})();

var showHideNavWidget = function (mod, tag, showOrHide) {
  var _mod = document.getElementById(mod),
    _tag = _mod.getElementsByTagName(tag),
    _showOrHide = (!showOrHide || showOrHide === 'hide') ? 'hidden' : 'visible';
  for (var i = _tag.length - 1; i >= 0; i--) {
    _tag.style.visibility = _showOrHide;
  }
};
/**
 * * 订阅消息
 */
(function () {
  Mediator.register('hideAllNavNum', function () {
    showHideNavWidget('collection_nav', 'b', false);
  });
})();

/**
 * ! 发布消息
 */
(function () {
  var hideNum = document.getElementById('hide_num'),
    hideUrl = document.getElementById('hide_url');
  hideNum.onchange = function () {
    if (hideNum.checked) {
      Mediator.send('hideAllNavNum');
    } else {
      Mediator.send('showAllNavNum');
    }
  }
  hideUrl.onchange = function () {
    if (hideUrl.checked) {
      Mediator.send('hideAllNavUrl');
    } else {
      Mediator.send('hideAllNavUrl');
    }
  }
})();

/**
 * * 重要是信息
 * ! 启用的方法或不被使用
 * ? 暴露给API的方法
 * TODO 代办事项
 * @param webURL URL地址
 * @param param 参数
 * @param option 配置
 */

// 钩子函数
var Hook = {
  hooks: [],
  register: function (name, callback) {
    if (typeof (Hook.hooks[name]) === 'undefined') {
      Hook.hooks[name] = [];
    }
    Hook.hooks[name].push(callback);
  },
  call: function (name, arg) {
    if (typeof (Hook.hooks[name]) !== 'undefined') {
      for (var i = 0; i < Hook.hooks[name].length; ++i) {
        if (Hook.hooks[name][i](arg) !== true) {
          break;
        }
      }
    }
  }
};

// 注册钩子
Hook.register(
  'quit',
  function (args) {
    window.alert('Bye!');
    return true;
  }
);

// 调用挂钩 如果钩子返回不是 true，处理停止。
Hook.call('quit', ['All Done']);
