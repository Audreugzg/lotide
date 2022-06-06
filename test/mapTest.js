const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("return 'noma for find key ", () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ["g","c","t","m","t"]);
  });
  
});