const assert = require('chai').assert;
const findKeyByValue   = require('../findKeyByValue');



describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it("return 'drama' for the value 'The Wire' ", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("return undefined for the value 'That '70s Show' ", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  
});