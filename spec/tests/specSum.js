let sumOfTwo = require ('../../sum.js');

describe("Sum", function(){
it("sum1", function(){
    expect(sum(3,2)).toEqual(5);
});  
it("sum(2)", function() {
    expect(sum(3,3)).toEqual(5);
  });    
});