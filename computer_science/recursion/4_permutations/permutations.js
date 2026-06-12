const permutations = function (arr) {
  if (arr.length <= 1) {
    return [arr];
  }

  const results = [];
  const lastVal = arr.at(-1);
  const prev = permutations(arr.slice(0, -1));

  for (const el of prev) {
    for (let i = 0; i < arr.length; i++) {
      const temp = [...el];
      temp.splice(i, 0, lastVal);
      results.push(temp);
    }
  }
  return results;
};

// Do not edit below this line
module.exports = permutations;
