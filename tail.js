// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     //console.log("✅✅✅ Assertion Passed: " + actual + "===" + expected);
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     //console.log("❌❌❌ Assertion Failed: " + actual + "!==" + expected);
//     console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
//   }

// };


const tail = function(array) {
  let tail = array.slice(0);
  return tail;
};

module.exports = tail;


