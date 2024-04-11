const assert = require('node:assert').strict;
const missingNumber = require("./missingNumber");

describe('when missing number exist', () => {
  it("should correct result", () => {
    assert.equal(missingNumber([5,0,1,3,2]), 4);
    assert.equal(missingNumber([7, 9, 10, 11, 12]), 8);
    assert.equal(missingNumber([20, 13, 12, 14, 15, 16, 17, 18]), 19);
    assert.equal(missingNumber([1, 2, 3, 4, 5]), -1);
  });

  describe('and nums are big', () => {
    const createBigArr = (range, missNum) => {
      const arr = [];
      for (let i = 0; i < range; i++) {
        if (i !== missNum) {
          arr.push(i);        
        }
      }

      return arr;
    }

    it("should correct result", () => {
      assert.equal(missingNumber(createBigArr(1000, 5)), 5);
      assert.equal(missingNumber(createBigArr(100, 13)), 13);
      assert.equal(missingNumber(createBigArr(2000, 333)), 333);
    });
  })
})

describe('when missing number don\'t exist', () => {
  it("should correct result", () => {
    assert.equal(missingNumber([]), -1);
    assert.equal(missingNumber([1]), -1);
    assert.equal(missingNumber([1, 2, 3, 4, 5]), -1);
    assert.equal(missingNumber([5, 3, 4, 1, 2]), -1);
  });
})

describe('when nums is not array', () => {
  it("should correct result", () => {
    assert.equal(missingNumber(), -1);
    assert.equal(missingNumber(undefined), -1);
    assert.equal(missingNumber(null), -1);
    assert.equal(missingNumber('123'), -1);
    assert.equal(missingNumber(123), -1);
  });
})
