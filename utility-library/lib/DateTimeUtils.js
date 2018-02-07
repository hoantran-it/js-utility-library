"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _momentTimezone = require("moment-timezone");

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateTime = {
  TIME_STANDARD_FORMAT: "HH:mm",
  DATE_STANDARD_FORMAT: "MMM DD YYYY",
  DATE_TIME_STANDARD_FORMAT: "MMM DD YYYY HH:mm",
  DATE_TIME_SECOND_STANDARD_FORMAT: "MMM DD YYYY HH:mm:ss"
};

var correctTimezone = function correctTimezone(time) {
  return (0, _moment2.default)(time).tz(_momentTimezone2.default.tz.guess());
};

var getRelativeTime = function getRelativeTime(time) {
  var startOf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "minute";

  var correctTime = correctTimezone(time);
  return (0, _moment2.default)(correctTime).startOf(startOf).fromNow();
};

var getDateTime = function getDateTime(time) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DateTime.DATE_TIME_SECOND_STANDARD_FORMAT;

  var correctTime = correctTimezone(time);
  return (0, _moment2.default)(correctTime).format(format);
};

var isSame = function isSame(time) {
  var object = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DateTime.DATE_TIME_SECOND_STANDARD_FORMAT;

  var correctTime = correctTimezone(time);
  return (0, _moment2.default)().isSame((0, _moment2.default)(correctTime), "day");
};

exports.default = {
  DateTime: DateTime,
  correctTimezone: correctTimezone,
  getRelativeTime: getRelativeTime,
  getDateTime: getDateTime,
  isSame: isSame
};