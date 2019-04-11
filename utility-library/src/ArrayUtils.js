const removeDuplicate = (array, fieldName) => {
  return array.filter((element, index, array) => array.findIndex((t) => {
    return (t[fieldName] === element[fieldName])
  }) === index);
}

const extractFieldList = (objectList, fieldName) => {
  return objectList.map((object, index) => {
    return object[fieldName];
  });
}

export default {
  removeDuplicate,
  extractFieldList
}