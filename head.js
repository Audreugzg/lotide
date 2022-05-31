// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + actual + "===" + expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("❌❌❌ Assertion Failed: " + actual + "!==" + expected);
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const head = function(array){
  let head = array[0];
  return head;

}

assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");