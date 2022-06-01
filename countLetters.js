const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + actual + "===" + expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("❌❌❌ Assertion Failed: " + actual + "!==" + expected);
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(input){
  const count = {};
  strings = input.replace(/\s+/g, '')
  for(const letter of strings){
    count[letter] = 0;
  }
  for(const letter of strings){
    for(const words in count){
      if(words === letter){
        count[letter] += 1;
      }
    }
  }
  return count;
  

};

console.log(countLetters("lighthouse in the house"));