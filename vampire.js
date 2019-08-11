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

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    let vampName = null;
    if (this.name === name) {
      return this;
    } 
    for (let offspr of this.offspring) {
      if (offspr.vampireWithName(name)) {
        return offspr.vampireWithName(name);
      }
    }
    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let total = 0;
      for (let offspr of this.offspring) {
        total += offspr.totalDescendents + 1;
      }
    return total;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let total = [];
    if (this.yearConverted >= 1980) {
      total.push(this);
    }
    for (let offspr of this.offspring) {
      total = total.concat(offspr.allMillennialVampires);
    }
    return total;
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

// let rootVampire;
// let offspring1, offspring2, offspring3, offspring4, offspring5;
// rootVampire = new Vampire("root");
// offspring1 = new Vampire("andrew");
// offspring2 = new Vampire("sarah");
// offspring3 = new Vampire("c");
// offspring4 = new Vampire("d");
// offspring5 = new Vampire("e");
// rootVampire.addOffspring(offspring1);
// offspring1.addOffspring(offspring2);
// rootVampire.addOffspring(offspring3);
// offspring3.addOffspring(offspring4);
// offspring4.addOffspring(offspring5);

// console.log(rootVampire.vampireWithName("d"));


module.exports = Vampire;

