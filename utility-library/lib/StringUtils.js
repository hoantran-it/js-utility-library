'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var shortenString = function shortenString(string) {
  var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  var hasEllipsis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (string && string.length > maxLength) {
    if (hasEllipsis) {
      return string.substring(0, maxLength - 3) + '...';
    } else {
      return string.substring(0, maxLength);
    }
  }
  return string;
};

var buildUrlFilter = function buildUrlFilter() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var sortingArr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var filter = 'page=' + page + '&size=' + size;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sortingArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var sorting = _step.value;

      filter = filter + '&sort=' + sorting.fieldName + ',' + sorting.order;
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

  return filter;
};

exports.default = {
  shortenString: shortenString,
  buildUrlFilter: buildUrlFilter
};