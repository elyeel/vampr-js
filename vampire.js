class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numToRoot = 0;
    let currentVampr = this;
    while (currentVampr.creator) {
      currentVampr = currentVampr.creator;
      numToRoot++;
    }
    return numToRoot;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    const currentVamprDist = this.numberOfVampiresFromOriginal;
    const vampireDist = vampire.numberOfVampiresFromOriginal;
    if (currentVamprDist < vampireDist) {
      return true;
    } else {
      return false;
    }
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

const rootVampire = new Vampire("root");
const offspring1 = new Vampire();
const offspring2 = new Vampire();
const offspring3 = new Vampire();
const offspring4 = new Vampire();

rootVampire.addOffspring(offspring1);
rootVampire.addOffspring(offspring2);
rootVampire.addOffspring(offspring3);
offspring3.addOffspring(offspring4);

console.log(rootVampire.isMoreSeniorThan(offspring1));

module.exports = Vampire;

