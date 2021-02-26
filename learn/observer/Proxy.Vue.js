
var Watcher = /** @class */ (function () {
    function Watcher(node, attr, data, property) {
        this.node = node;
        this.attr = attr;
        this.data = data;
        this.property = property;
    }
    Watcher.prototype.update = function () {
        this.node[this.attr] = this.data[this.property];
    };
    return Watcher;
}());
var ProxyVue = /** @class */ (function () {
    function ProxyVue(options) {
        this.$options = options || {};
        this.$methods = this._methods = this.$options.methods;
        var data = (this._data = this.$options.data);
        this.subscribe = {};
        this.observe(data);
        this.compile(options.el);
    }
    ProxyVue.prototype.publish = function (watcher) {
        if (!this.subscribe[watcher.property])
            this.subscribe[watcher.property] = [];
        this.subscribe[watcher.property].push(watcher);
    };
    ProxyVue.prototype.observe = function (data) {
        var that = this;
        var handler = {
            get: function (target, property) {
                return target[property];
            },
            set: function (target, property, value) {
                var res = Reflect.set(target, property, value);
                that.subscribe[property].map(function (item) {
                    item.update();
                });
                return res;
            }
        };
        this.$data = new Proxy(data, handler);
    };
    ProxyVue.prototype.compile = function (el) {
        var _this = this;
        var nodes = Array.prototype.slice.call(document.querySelector(el).children);
        var data = this.$data;
        nodes.map(function (node) {
            if (node.children.length > 0)
                _this._complie(node);
            if (node.hasAttribute('v-bind')) {
                var property = node.getAttribute('v-bind');
                _this.publish(new Watcher(node, 'innerHTML', data, property));
            }
            if (node.hasAttribute('v-model')) {
                var property_1 = node.getAttribute('v-model');
                _this.publish(new Watcher(node, 'value', data, property_1));
                node.addEventListener('input', function () {
                    data[property_1] = node.value;
                });
            }
            if (node.hasAttribute('v-click')) {
                var methodName = node.getAttribute('v-click');
                var method = _this.$methods[methodName].bind(data);
                node.addEventListener('click', method);
            }
        });
    };
    ProxyVue.prototype._complie = function (node) {
        throw new Error('Method not implemented.');
    };
    return ProxyVue;
}());
exports["default"] = ProxyVue;
/*


// 渲染todoList列表
const Render = {
  // 初始化
  init: function (arr) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < arr.length; i++) {
      const li = document.createElement('li');
      li.textContent = arr[i];
      fragment.appendChild(li);
    }
    list.appendChild(fragment);
  },
  addList: function (val) {
    const li = document.createElement('li');
    li.textContent = val;
    list.appendChild(li);
  },
};


// 实例化一个proxyVue
window.onload = function() {
  let vm = new proxyVue({
    el: "#app",
    data: {
      num: 0,
      arr: []
    },
    methods: {
      addList() {
        this.arr.push(this.num);
        Render.addList(this.num);
      }
    }
  });
};




    <div id="app">
      <input type="text" v-model="num" />
      <input id="btn" type="button" value="添加到Todolist" v-click="addList" /><br/>
      <span>您输入的是：</span><span v-bind="num"></span>
      <ul id="list"></ul>
    </div>

*/
