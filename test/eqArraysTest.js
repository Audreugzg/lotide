const assert = require('chai').assert;
const eqArrays   = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for [1, 2, 3] and [1, 2, '3']", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, '3']), false); 
  });
  it("returns true for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(eqArrays(["Hello", "Lighthouse", "Labs"],["Hello", "Lighthouse", "Labs"]), true); 
  });
  it("returns false for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(eqArrays(["Hello", "Lighthouse", "Lab"],["Hello", "Lighthouse", "Labs"]), false); 
  })
});