const separateNumber = (number = 0, separator = ",") => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

const getRandomNumber = (min = 0, max = 9) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

export default {
  separateNumber,
  getRandomNumber
}