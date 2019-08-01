"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ff = exports.requestApi = void 0;

var requestApi = function requestApi(url, data, header, method) {
  return new Promise(function (resolve, reject) {
    console.log('df');
    resolve(res); // wx.request({
    //     url: url, 
    //     data:data,
    //     header: header,
    //     method:method,
    //     dataType:JSON,
    //     success (res) {
    //       console.log(res.data);
    //       resolve(res);
    //     },
    //     fail(res) {
    //         wx.showToast({
    //             title: '网络错误！',
    //             duration: 3000
    //           });
    //         reject(res);
    //     }
    //   });
  });
};

exports.requestApi = requestApi;
var ff = 'hello';
exports.ff = ff;