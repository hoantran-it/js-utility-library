"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var serialize = function serialize(obj, prefix) {
  var str = [];
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + "[" + p + "]" : p,
          v = obj[p];
      str.push(v !== null && (typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" ? serialize(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
    }
  }
  return str.join("&");
};

exports.default = {
  serialize: serialize
};