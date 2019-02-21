"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var deepCopy = function deepCopy(obj) {
  var clone = {};
  for (var i in obj) {
    if (obj[i] != null && _typeof(obj[i]) == "object") clone[i] = deepCopy(obj[i]);else clone[i] = obj[i];
  }
  return clone;
};

exports.default = {
  deepCopy: deepCopy
};