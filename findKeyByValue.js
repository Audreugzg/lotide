const findKeyByValue = function(obj,val){
  for(const value in obj){
    if(obj[value] === val){
      return value;
    }
  }
  return undefined;

};

module.exports = findKeyByValue;