const contains = function (obj, val) {
  let res = false;
  for (const prop in obj) {
    if (obj[prop] === val) {
      return true;
    } else if (Number.isNaN(obj[prop]) && Number.isNaN(val)) {
      return true;
    } else if (obj[prop] !== null && typeof obj[prop] === "object") {
      res = contains(obj[prop], val);
      if (res) {
        return true;
      }
    }
  }
  return res;
};

// Do not edit below this line
module.exports = contains;
