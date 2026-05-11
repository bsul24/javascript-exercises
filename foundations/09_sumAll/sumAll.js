const sumAll = function(a, b) {
  if (a <= 0 || b <= 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR"
  }
  if (a > b) {
    [a, b] = [b, a]
  }
  let sum = 0
  for (let i = a; i <= b; i++) {
    sum += i
  }
  return sum
};

sumAll(1, 3)

// Do not edit below this line
module.exports = sumAll;
