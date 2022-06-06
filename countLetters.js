const countLetters = function (input) {
  const count = {};
  strings = input.replace(/\s+/g, '')
  for (const letter of strings) {
    count[letter] = 0;
  }
  for (const letter of strings) {

    count[letter] += 1;
  }
  return count;


};
module.exports = countLetters;

