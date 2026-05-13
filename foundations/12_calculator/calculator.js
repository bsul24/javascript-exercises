const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((sum, num) => sum + num, 0)
};

const multiply = function(arr) {
  return arr.reduce((prod, num) => prod * num, 1)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
	let total = 1
  while (a > 0) {
    total *= a
    a--
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
