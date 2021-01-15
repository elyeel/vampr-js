const chai = require("chai");
const expect = chai.expect;

const Vampire = require("../vampire.js");

describe("Vampire", function () {
  let rootVampire;
  beforeEach(function () {
    rootVampire = new Vampire("root");
  });

  describe("numberOfVampiresFromOriginal", () => {
    let offspring1, offspring2, offspring3, offspring4;
    beforeEach(() => {
      offspring1 = new Vampire();
      offspring2 = new Vampire();
      offspring3 = new Vampire();
      offspring4 = new Vampire();

      rootVampire.addOffspring(offspring1);
      offspring1.addOffspring(offspring2);
      offspring2.addOffspring(offspring3);
      offspring3.addOffspring(offspring4);
    });

    it("root should be 0 from original", () => {
      expect(rootVampire.numberOfVampiresFromOriginal).to.equal(0);
    });

    it("offspring 1 should be 1 from original", () => {
      // console.log(offspring1);
      expect(offspring1.numberOfVampiresFromOriginal).to.equal(1);
    });

    it("offspring 2 should be 2 from original", () => {
      // console.log(offspring2.creator);
      expect(offspring2.numberOfVampiresFromOriginal).to.equal(2);
    });

    it("offspring 4 should be 4 from original", () => {
      // console.log(offspring3);
      expect(offspring4.numberOfVampiresFromOriginal).to.equal(4);
    });
  });
});
