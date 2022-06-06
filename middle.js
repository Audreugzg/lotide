const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const middle = function(array) {
  mid = [];
  if(array.length < 3 ){
    return mid;
  }else{
    let midIndex = Math.floor(array.length/2);
    if(array.length % 2 !== 0) {
      mid.push(array[midIndex]);
      return mid;
    }else{
      mid.push(array[midIndex-1]);
      mid.push(array[midIndex]);
      return mid;
    }
  }
}

module.exports = middle;

