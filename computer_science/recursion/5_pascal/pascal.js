const pascal = function (n) {
  if (n === 1) {
    return [1];
  }
  const prev = pascal(n - 1);
  const result = [];
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === prev.length) {
      result.push(1);
    } else {
      result.push(prev[i] + prev[i - 1]);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = pascal;
