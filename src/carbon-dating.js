const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

// year = ln (MODERN_ACTIVITY / sampleActivity)
//         _____________________________________
//         0.693 / HALF_LIFE_PERIOD

module.exports = function dateSample(sampleActivity) {
  let year, numerator, denominator;
  let str = sampleActivity;
  if (typeof str !== "string") {
    return false;
  }
  let N = parseFloat(sampleActivity);
  if (isNaN(N)) {
    return false;
  }
  if (N <= 0 || N > 15) {
    return false;
  }

  numerator = Math.log(MODERN_ACTIVITY / N);
  denominator = 0.693 / HALF_LIFE_PERIOD;
  year = Math.ceil(numerator / denominator);
  return year;
};

