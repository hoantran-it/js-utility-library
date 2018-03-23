"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var separateNumber = function separateNumber() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ",";

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

exports.default = {
  separateNumber: separateNumber
};