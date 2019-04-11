"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var removeDuplicate = function removeDuplicate(array, fieldName) {
  return array.filter(function (element, index, array) {
    return array.findIndex(function (t) {
      return t[fieldName] === element[fieldName];
    }) === index;
  });
};

var extractFieldList = function extractFieldList(objectList, fieldName) {
  return objectList.map(function (object, index) {
    return object[fieldName];
  });
};

exports.default = {
  removeDuplicate: removeDuplicate,
  extractFieldList: extractFieldList
};