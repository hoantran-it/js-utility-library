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

  /**
   * Convert to current timezone
   * @param time: must be UTC timezone
   * @returns {*}
   */
};var correctTimezone = function correctTimezone(time) {
  return _moment2.default.utc(time).tz(_moment2.default.tz.guess());
};

/**
 * Fet relative time: 2 minutes ago, 3 hours ago,...
 * @param time: must be UTC timezone
 * @param startOf
 * @returns {string}
 */
var getRelativeTime = function getRelativeTime(time) {
  var startOf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "minute";

  return correctTimezone(time).startOf(startOf).fromNow();
};

/**
 * Get date time with format
 * @param time: must be UTC timezone
 * @param format
 * @returns {*}
 */
var getDateTime = function getDateTime(time) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DateTime.DATE_TIME_SECOND_STANDARD_FORMAT;

  return correctTimezone(time).format(format);
};

/**
 *Correct time
 * @param time
 * @param object
 * @returns {boolean|*}
 */
var isSame = function isSame(time) {
  var object = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DateTime.DATE_TIME_SECOND_STANDARD_FORMAT;

  return correctTimezone(_moment2.default.utc()).isSame(correctTimezone(time), "day");
};

exports.default = {
  DateTime: DateTime,
  correctTimezone: correctTimezone,
  getRelativeTime: getRelativeTime,
  getDateTime: getDateTime,
  isSame: isSame
};