"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(2));

var _eventHub = _interopRequireDefault(require('../../common/eventHub.js'));

var _x = require('../../vendor.js')(1);

var _index = _interopRequireDefault(require('../../store/index.js'));

var _test = _interopRequireDefault(require('../../mixins/test.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//该部分编译后会被解析为index.js文件
_core["default"].page({
  store: _index["default"],
  config: {
    navigationBarTitleText: 'test'
  },
  hooks: {},
  mixins: [_test["default"]],
  data: {
    inputmodel: 'v-model',
    mynum: 20,
    msg: '',
    str: 'fdg'
  },
  mounted: function mounted() {
    wx.getLocation({
      type: 'wgs84',
      success: function success(res) {
        var latitude = res.latitude; // 纬度

        var longitude = res.longitude; // 经度
      }
    });
    console.log(latitude);
    console.log(longitude);
  },
  computed: {},
  methods: {
    handleClick: function handleClick() {
      this.msg = 'hello';
      console.log('hello');
    }
  }
}, {info: {"components":{"list":{"path":"..\\..\\components\\wepy-list"},"group":{"path":"..\\..\\components\\group"},"panel":{"path":"..\\..\\components\\panel"},"counter":{"path":"..\\..\\components\\counter"},"slide-view":{"path":"..\\..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{}}, handlers: {'9-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleClick($event)
      })();
    
  }}}, models: {} });