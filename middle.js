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

assertArraysEqual(middle([1, 2, 3]),[2]);// => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); // => [3, 4]