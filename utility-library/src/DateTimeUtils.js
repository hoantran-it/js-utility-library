import moment from "moment";
import mtz from "moment-timezone";

const DateTime = {
  TIME_STANDARD_FORMAT: "HH:mm",
  DATE_STANDARD_FORMAT: "MMM DD YYYY",
  DATE_TIME_STANDARD_FORMAT: "MMM DD YYYY HH:mm",
  DATE_TIME_SECOND_STANDARD_FORMAT: "MMM DD YYYY HH:mm:ss"
}

/**
 * Convert to current timezone
 * @param time: must be UTC timezone
 * @returns {*}
 */
const correctTimezone = (time) => {
  return moment.utc(time).tz(moment.tz.guess());
}

/**
 * Fet relative time: 2 minutes ago, 3 hours ago,...
 * @param time: must be UTC timezone
 * @param startOf
 * @returns {string}
 */
const getRelativeTime = (time, startOf = "minute")=> {
  return correctTimezone(time).startOf(startOf).fromNow();
}

/**
 * Get date time with format
 * @param time: must be UTC timezone
 * @param format
 * @returns {*}
 */
const getDateTime = (time, format = DateTime.DATE_TIME_SECOND_STANDARD_FORMAT)=> {
  return correctTimezone(time).format(format);
}

/**
 *Correct time
 * @param time
 * @param object
 * @returns {boolean|*}
 */
const isSame = (time, object = DateTime.DATE_TIME_SECOND_STANDARD_FORMAT)=> {
  return correctTimezone(moment.utc()).isSame(correctTimezone(time), "day");
}

export default {
  DateTime,
  correctTimezone,
  getRelativeTime,
  getDateTime,
  isSame
}