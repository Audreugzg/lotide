const eqArrays = require('./eqArrays');

const assertArraysEqual = function(sample1,sample2){
  if (eqArrays(sample1,sample2)) {
    console.log(`✅✅✅ two arrays are equal`);
  } else {
    console.log(`❌❌❌ two arrays are not equal`);
  }

}

module.exports = assertArraysEqual;

