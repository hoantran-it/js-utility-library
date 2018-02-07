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

const buildUrlFilter = (page = 0, size = 10, sortingArr = []) => {
  let filter = `page=${page}&size=${size}`;
  for (var sorting of sortingArr) {
    filter = `${filter}&sort=${sorting.fieldName},${sorting.order}`
  }
  return filter;
}

export default {
  shortenString,
  buildUrlFilter
}