const findTheOldest = function(arr) {
  const currentYear = new Date().getFullYear()
  return arr.sort((a, b) => {
    const aAge = a.yearOfDeath ? a.yearOfDeath - a.yearOfBirth : currentYear - a.yearOfBirth
    const bAge = b.yearOfDeath ? b.yearOfDeath - b.yearOfBirth : currentYear - b.yearOfBirth
    return bAge - aAge
  })[0]
};


// Do not edit below this line
module.exports = findTheOldest;
