module.exports = function getSeason(date) {
  let season = ["winter", "spring", "summer", "autumn"];
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error();
  }

  switch (date.getMonth()) {
    case 0:
    case 1:
    case 11:
      return season[0];
      break;
    case 2:
    case 3:
    case 4:
      return season[1];
      break;
    case 5:
    case 6:
    case 7:
      return season[2];
      break;
    case 8:
    case 9:
    case 10:
      return season[3];
      break;
  }
};
