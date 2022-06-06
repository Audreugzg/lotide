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

module.exports = eqArrays;


