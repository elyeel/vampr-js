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
    let currVampire = this;
    while (currVampire.creator) {
      numToRoot++;
      currVampire = currVampire.creator;
    }
    return numToRoot;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    const currVampireDistance = this.numberOfVampiresFromOriginal;
    const vampireDistance = vampire.numberOfVampiresFromOriginal;
    return currVampireDistance < vampireDistance ? true : false;
  }

  /** Stretch **/
  parentsList(vampire) {
    const list = [];
    // list.push(vampire);
    const numToRoot = vampire.numberOfVampiresFromOriginal;
    let curr = vampire;
    for (let i = 0; i <= numToRoot; ++i) {
      list.push(curr);
      curr = curr.creator;
    }
    return list;
  }

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    if (vampire.name === this.name) return vampire

    const parentOfThis = this.parentsList(this);
    const parentOfCurr = vampire.parentsList(vampire);
    let result;
    if (parentOfThis.length > parentOfCurr.length) {
      for (let i = 0; i < parentOfThis.length; ++i) {
        if (parentOfCurr.indexOf(parentOfThis[i]) >= 0) {
          result = parentOfThis[i];
          break;
        }
      }
    } else {
      for (let i = 0; i < parentOfCurr.length; ++i) {
        if (parentOfThis.indexOf(parentOfCurr[i]) >= 0) {
          result = parentOfCurr[i];
          break;
        }
      }
    }

    return result;
  }
}

module.exports = Vampire;
