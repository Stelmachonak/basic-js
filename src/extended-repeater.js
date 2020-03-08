module.exports = function repeater(str, options) {
  let defaultOptions = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 1,
    additionSeparator: "|"
  };

  options.separator = String(options.separator);
  options.additionSeparator = String(options.additionSeparator);

  if (options.separator == "undefined") {
    options.separator = defaultOptions.separator;
  }

  if (options.additionSeparator == "undefined") {
    options.additionSeparator = defaultOptions.additionSeparator;
  }

  if (!Number.isInteger(options.repeatTimes)) {
    options.repeatTimes = defaultOptions.repeatTimes;
  }

  if (!Number.isInteger(options.additionRepeatTimes)) {
    options.additionRepeatTimes = defaultOptions.additionRepeatTimes;
  }

  if (options.addition === undefined) {
    options.addition = defaultOptions.addition;
  }

  let result = "";
  for (let i = 0; i < options.repeatTimes; i++) {
    result += str;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      result += options.addition;
      if (j < options.additionRepeatTimes - 1) {
        result += options.additionSeparator;
      }
    }
    if (i < options.repeatTimes - 1) {
      result += options.separator;
    }
  }
  return result;
};
