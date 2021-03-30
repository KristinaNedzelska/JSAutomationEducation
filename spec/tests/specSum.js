let sumOfTwo = require ('../../sum.js');

describe("Sum", function(){
it("sum(1)", function(){
    expect(sumOfTwo(3,2)).toEqual(5);
});  
it("sum(2)", function() {
    expect(sumOfTwo(3,3)).not.toEqual(5);
  });    
});