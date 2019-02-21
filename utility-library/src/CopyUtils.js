const deepCopy = (obj) => {
  let clone = {};
  for (let i in obj) {
    if (obj[i] != null && typeof obj[i] == "object") {
      if (Array.isArray(obj[i])) {
        clone[i] = [];
        for (let e of obj[i]) {
          if(typeof e == "object"){
            clone[i].push(deepCopy(e));
          } else {
            clone[i].push(e);
          }
        }
      } else {
        clone[i] = deepCopy(obj[i]);
      }
    } else {
      clone[i] = obj[i];
    }
  }
  return clone;
}

export default {
  deepCopy
}