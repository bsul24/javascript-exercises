const test = [[[[[[[[[[[[[[4]]]]]], 246]]]]]]]];

// const totalIntegers = function (obj) {
//   let ints = 0;
//   let objs = [];
//   if (Array.isArray(obj)) {
//     for (const n of obj) {
//       if (Number.isInteger(n)) {
//         ints++;
//       } else if (typeof n === "object" && n !== null) {
//         if (Array.isArray(n)) {
//           if (n.length > 0) {
//             ints += totalIntegers(n);
//           }
//         } else {
//           if (Object.keys(n).length > 0) {
//             ints += totalIntegers(n);
//           }
//         }
//       }
//     }
//   } else if (Number.isInteger(obj)) {
//     ints++;
//   } else if (typeof val === "object" && val !== null) {
//     for (const val of Object.values(obj)) {
//       if (Number.isInteger(val)) {
//         ints++;
//       } else if (typeof val === "object" && val !== null) {
//         ints += totalIntegers(val);
//       }
//     }
//   } else {
//     return;
//   }
//   return ints;
// };

const totalIntegers = function (input) {
  let ints = 0;

  if (Array.isArray(input)) {
    for (const item of input) {
      if (Number.isInteger(item)) {
        ints++;
      } else if (typeof item === "object" && item !== null) {
        const recursiveVal = totalIntegers(item);
        if (recursiveVal) {
          ints += recursiveVal;
        }
      }
    }
  } else if (typeof input === "object" && input !== null) {
    for (const val of Object.values(input)) {
      if (Number.isInteger(val)) {
        ints++;
      } else if (typeof val === "object" && val !== null) {
        const recursiveVal = totalIntegers(val);
        if (recursiveVal) {
          ints += recursiveVal;
        }
      }
    }
  } else {
    return;
  }
  return ints;
};

// Do not edit below this line
module.exports = totalIntegers;
