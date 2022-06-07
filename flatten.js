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

};



module.exports = flatten;
