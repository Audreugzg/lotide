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

const flatten = function(array){
  let flatArray = [];
  for (const item in array) {
    if (Array.isArray(array[item])) {
      for (let i = 0; i < array[item].length; i++ ) {
        flatArray.push(array[item][i]);
      } 
    }else{
      flatArray.push(array[item]);
    }
  }
  return flatArray;

}
