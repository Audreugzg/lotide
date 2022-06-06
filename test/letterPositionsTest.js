const assert = require('chai').assert;
const letterPositions = require('../letterPositions');




describe("#letterPositions", () => {
  it("return { L: [ +0, 2 ], H: [ 1 ] } for 'LHL' ", () => {
    assert.deepEqual(letterPositions('LHL'), { L: [ 0, 2 ], H: [ 1 ] });
  });
  it("return {h: [0], e: [1], l: [2, 3], o:[4] } for 'lighthouse in the house' ", () => {
    assert.deepEqual(letterPositions('hello'), {h: [0], e: [1], l: [2, 3], o:[4]});
  });
});