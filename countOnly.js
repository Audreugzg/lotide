// FUNCTION IMPLEMENTATION
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const countedItems = {};
  for (const items in itemsToCount) {
    if(itemsToCount[items]){
      countedItems[items] = 0;
      for (const item of allItems) {
        if(item === items){
          countedItems[items] = countedItems[item] +1;
        }
        
      }
    }

    
  }
  for (const things in countedItems) {
    if(countedItems[things] === 0){
      delete countedItems[things];
    }

    
  }
  return countedItems;
   
}

module.exports = countOnly;