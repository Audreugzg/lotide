const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + actual + "===" + expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    //console.log("❌❌❌ Assertion Failed: " + actual + "!==" + expected);
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }

};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;  
  }
  for (const key in object1) {
    if(Array.isArray(object1[key]) || Array.isArray(object2[key])){
      return eqArrays(object1[key],object2[key]);
    }else{
      if (object1[key] !== object2[key]) {
        return false;   
      }
    }
    
  }
  return true;
  
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false