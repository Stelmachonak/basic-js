module.exports = function transform(arr) {
  if (Object.prototype.toString.call(arr) !== "[object Array]")
    throw new Error();
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--double-next":
        if (i + 1 < arr.length) {
          newArr.push(arr[i + 1]);
        }
        break;

      case "--double-prev":
        if (i - 1 >= 0) {
          newArr.push(arr[i - 1]);
        }
        break;
      case "--discard-next":
        i++;
        break;

      case "--discard-prev":
        newArr.pop();
        break;

      default: {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr;
};
