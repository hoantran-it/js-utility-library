const separateNumber = (number = 0, separator = ",") => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export default {
  separateNumber
}