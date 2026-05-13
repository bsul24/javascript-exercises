const fibonacci = function(n) {
  const nInt = Number.parseInt(n)
  if (nInt < 0) {
    return "OOPS"
  } 

  if (nInt === 0) {
    return 0
  }

  if (nInt < 3) {
    return 1
  }

  let prev = 1
  let cur = 1
  let total = 2

  while (total < n) {
    temp = cur
    cur = cur + prev
    prev = temp
    total++
  }

  return cur
};

// Do not edit below this line
module.exports = fibonacci;
