"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: {
    gitem: {}
  },
  data: {
    imgUrls: ['https://raw.githubusercontent.com/LPLife/img/master/2019-7-31/banner_1.jpg', 'https://raw.githubusercontent.com/LPLife/img/master/2019-7-31/banner_2.jpg', 'https://raw.githubusercontent.com/LPLife/img/master/2019-7-31/banner_3.jpg'],
    indicatorDots: true,
    //是否显示面试指示点
    autoplay: true,
    //是否自动播放
    circular: true,
    //是否使用衔接滑动（滑动到最后一张，循环从头开始）
    indicatorColor: 'rgba(255,255,255,0.4)',
    // 指示点的颜色
    interval: 5000,
    //自动切换时间间隔
    duration: 1000,
    //滑动动画时长,
    indicatorActiveColor: '#16f2e7'
  },
  methods: {}
}, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} }, {info: {"components":{},"on":{}}, handlers: {}, models: {} });