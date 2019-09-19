const defaultSorting = [{
  fieldName: "created",
  order: "desc"
}]

const shortenString = (string, maxLength = 50, hasEllipsis = true) => {
  if (string && string.length > maxLength) {
    if (hasEllipsis) {
      return string.substring(0, maxLength - 3) + '...';
    } else {
      return string.substring(0, maxLength);
    }
  }
  return string;
}

const buildUrlFilter = (page = 0, size = 10, sortingArr = defaultSorting) => {
  let filter = `page=${page}&size=${size}`;
  for (var sorting of sortingArr) {
    filter = `${filter}&sort=${sorting.fieldName},${sorting.order}`
  }
  return filter;
}

const getRandomString = (length = 12) => {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

const replaceBrTagByNewline = (text) => {
  if (text) {
    return text.replace(/<br\s*\/?>/mg, "\n");
  } else {
    return "";
  }
}

const replaceNewlineByBrTag = (text) => {
  if (text) {
    return text.replace(/\n/g, "<br/>");
  } else {
    return "";
  }
}

const convertUrlQueryStringToJson = (queryString) => {
  return Object.fromEntries(new URLSearchParams(queryString));
}

const convertJsonToUrlQueryString = (json) => {
  return new URLSearchParams(json).toString();
}

const beautifyCardNumber = (cardNum) => {
  return cardNum.match(/.{1,4}/g).join(" ");
}

export default {
  shortenString,
  buildUrlFilter,
  getRandomString,
  replaceBrTagByNewline,
  replaceNewlineByBrTag,
  convertUrlQueryStringToJson,
  convertJsonToUrlQueryString,
  beautifyCardNumber
}