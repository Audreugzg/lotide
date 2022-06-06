const without = function(list,itemNotWant){
  result = [];
  for (const item of list) {
    result.push(item);
    
  }
  for (let i = 0; i < itemNotWant.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if(result[j] === itemNotWant[i] ){
        result.splice(j,1);
      }
      
    }
    
  }
  return result;
  

}

module.exports = without;
