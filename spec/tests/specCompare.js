let compare = require('../../compare.js');

describe("Compare", function(){ 
    it("Compare(1)", function() {
      expect(compare(50,11)).toEqual(true);
    });
         it("Compare(3)", function() {
        expect(compare(25,25)).toEqual(true);
      });

  });