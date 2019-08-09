"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(1));

var _eventHub = _interopRequireDefault(require('../../common/eventHub.js'));

var _x = require('../../vendor.js')(2);

var _index = _interopRequireDefault(require('../../store/index.js'));

var _test = _interopRequireDefault(require('../../mixins/test.js'));

var _util = require('../../utils/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
    var data = {
      url: '../../../static/data/house.json',
      method: 'get'
    };

    _util.requestApi.apply(void 0, _toConsumableArray(data)).then(function (res) {
      console.log(res);
    })["catch"](function (err) {});
  },
  computed: {},
  methods: {
    handleClick: function handleClick() {
      this.msg = 'hello';
    }
  }
}, {info: {"components":{"list":{"path":"..\\..\\components\\wepy-list"},"swiperData":{"path":"..\\..\\components\\swiperData"},"group":{"path":"..\\..\\components\\group"},"information":{"path":"..\\..\\components\\information"},"panel":{"path":"..\\..\\components\\panel"},"counter":{"path":"..\\..\\components\\counter"},"slide-view":{"path":"..\\..\\$vendor\\miniprogram-slide-view\\miniprogram_dist\\index"}},"on":{}}, handlers: {}, models: {} });