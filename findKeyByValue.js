const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + actual + "===" + expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("❌❌❌ Assertion Failed: " + actual + "!==" + expected);
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKeyByValue = function(obj,val){
  for(const value in obj){
    if(obj[value] === val){
      return value;
    }
  }
  return undefined;

};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


//test case
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);