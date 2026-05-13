const palindromes = function (str) {
  const cleanStr = str
    .toLowerCase()
    .split("")
    .filter(c => (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9'))
    .join("")
  return cleanStr === cleanStr.split("").reverse().join("")
};


// Do not edit below this line
module.exports = palindromes;
