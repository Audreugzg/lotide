const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), 'Labs');
  });
  it("returns '5' for [1,2,3,4,'5']", () => {
    assert.strictEqual(tail([1,2,3,4,'5']), '5'); 
  });
  it("returns 1 for [1]", () => {
    assert.strictEqual(tail([1]), 1); 
  })
});