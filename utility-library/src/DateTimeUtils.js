import moment from "moment";
import mtz from "moment-timezone";

const DateTime = {
  TIME_STANDARD_FORMAT: "HH:mm",
  DATE_STANDARD_FORMAT: "MMM DD YYYY",
  DATE_TIME_STANDARD_FORMAT: "MMM DD YYYY HH:mm",
  DATE_TIME_SECOND_STANDARD_FORMAT: "MMM DD YYYY HH:mm:ss"
}

const correctTimezone = (time) => {
  return moment(time).tz(mtz.tz.guess());
}

const getRelativeTime = (time, startOf = "minute")=> {
  let correctTime = correctTimezone(time);
  return moment(correctTime).startOf(startOf).fromNow();
}

const getDateTime = (time, format = DateTime.DATE_TIME_SECOND_STANDARD_FORMAT)=> {
  let correctTime = correctTimezone(time);
  return moment(correctTime).format(format);
}

const isSame = (time, object = DateTime.DATE_TIME_SECOND_STANDARD_FORMAT)=> {
  let correctTime = correctTimezone(time);
  return moment().isSame(moment(correctTime), "day");
}

export default {
  DateTime,
  correctTimezone,
  getRelativeTime,
  getDateTime,
  isSame
}