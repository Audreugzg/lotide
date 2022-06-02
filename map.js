const eqArrays = function(sample1,sample2){
  if (sample1.length === sample2.length) {
    for (let i = 0; i < sample1.length; i++) {
      if(sample1[i] !== sample2[i]){
        return false;
      } 
    
    }
    return true; 
    
  } else {
    return false;
  }

}

const assertArraysEqual = function(sample1,sample2){
  if (eqArrays(sample1,sample2)) {
    console.log(`✅✅✅ two arrays are equal`);
  } else {
    console.log(`❌❌❌ two arrays are not equal`);
  }

}
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
//test case
assertArraysEqual(results1,["g","c","t","m","t"]);