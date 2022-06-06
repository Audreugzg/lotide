const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  strings = sentence.replace(/\s+/g, '')
  for(const letter of strings){
    results[letter] = [];
  }
  for (let i = 0; i < sentence.length; i++) {
    if(sentence[i] !== " "){
      results[sentence[i]].push(i);
    }
      
  }
  console.log(results);
  return results;
};

module.exports = letterPositions;
