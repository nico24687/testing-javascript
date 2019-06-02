var assert = require('chai').assert;

var myFunctions = require('./implementation');

describe('square', function () {
  it('returns the square of a number', function () {
    assert.equal(myFunctions.square(2), 4);
  });
});

describe('addTwo', function(){
  it('adds two to a given number', function(){
    assert.equal(myFunctions.addTwo(4), 6)
  })
})

describe('multiply', function(){
  it('adds two numbers together', function(){
    assert.equal(myFunctions.multiply(4,2), 8)
  })
})

describe("subtract", function(){
  it("subtracts one number from another", function(){
    assert.equal(myFunctions.subtract(7,1), 6)
  })
})

describe("divide", function(){
  it("divides one number by another", function(){
    assert.equal(myFunctions.divide(10,2), 5)
  })
})

describe("reverseString", function(){
  it("reverses the letters of a string", function(){
    assert.equal(myFunctions.reverseString("hello"), "olleh")
  })
})

describe("findLongestWord", function(){
  it("returns the longest word in a sentance", function(){
    assert.equal(myFunctions.findLongestWord('the cat sat on the piano'), "piano")
  })
})
