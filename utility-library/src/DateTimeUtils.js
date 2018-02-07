import moment from "moment";
import mtz from "moment-timezone";

const DateTime = {
  TIME_STANDARD_FORMAT: "HH:mm",
  DATE_STANDARD_FORMAT: "MMM DD YYYY",
  DATE_TIME_STANDARD_FORMAT: "MMM DD YYYY HH:mm",
  DATE_TIME_SECOND_STANDARD_FORMAT: "MMM DD YYYY HH:mm:ss"
}

const correctTimezone = (time) => {
  return moment(time).tz(moment.tz.guess());
}

const getRelativeTime = (time, startOf = "minute")=> {
  return moment(time).startOf(startOf).fromNow();
}

const getDateTime = (time, format = DateTime.DATE_TIME_SECOND_STANDARD_FORMAT)=> {
  return moment(time).format(format);
}

const isSame = (time, object = DateTime.DATE_TIME_SECOND_STANDARD_FORMAT)=> {
  return moment().isSame(moment(time), "day");
}

export default {
  DateTime,
  correctTimezone,
  getRelativeTime,
  getDateTime,
  isSame
}