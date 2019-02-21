"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var deepCopy = function deepCopy(obj) {
  var clone = {};
  for (var i in obj) {
    if (obj[i] != null && _typeof(obj[i]) == "object") {
      if (Array.isArray(obj[i])) {
        clone[i] = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = obj[i][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var e = _step.value;

            if ((typeof e === "undefined" ? "undefined" : _typeof(e)) == "object") {
              clone[i].push(deepCopy(e));
            } else {
              clone[i].push(e);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        clone[i] = deepCopy(obj[i]);
      }
    } else {
      clone[i] = obj[i];
    }
  }
  return clone;
};

exports.default = {
  deepCopy: deepCopy
};