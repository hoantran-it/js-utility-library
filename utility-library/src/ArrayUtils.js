const removeDuplicate = (array, fieldName) => {
  return array.filter((element, index, array) => array.findIndex((t) => {
    return (t[fieldName] === element[fieldName])
  }) === index);
}

export default {
  removeDuplicate
}