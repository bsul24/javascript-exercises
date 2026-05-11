const removeFromArray = function(arr, ...nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = 0
    while (j < arr.length) {
      if (arr[j] === nums[i]) {
        arr.splice(j, 1)
      } else {
        j++
      }
    }
  }
  return arr
};

// Do not edit below this line
module.exports = removeFromArray;
