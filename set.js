function mySet() {
  // the var collection will hold the set
  var collection = [];

  // this method will check if an element is present and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  // this method returns the values of a set
  this.values = function () {
    return collection;
  };

  // this method add a new element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    } else {
      return false;
    }
  };

  // this method will remove the element pass into the set
  this.remove = function (element) {
    if (this.has(element)) {
      var index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    } else return false;
  };

  // this method will return the size of the set
  this.size = function () {
    return collection.length;
  };

  // this method create a unioset from a new set
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });

    return unionSet;
  };

  // this methos creates an intersection set from a new set passed in
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();

    firstSet.forEach(function (element) {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });

    return intersectionSet;
  };

  // this method will return the difference of two set as a new set
  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();

    firstSet.forEach(function (element) {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });

    return differenceSet;
  };

  // this method return a true of false value telling if a set passed in a subset
  this.subset = function (otherSet) {
    var firstSet = this.values();

    return firstSet.every(function (element) {
      return otherSet.has(element);
    });
  };
}

var setA = new mySet();
var setB = new mySet();

// setA.add("Desk");
setA.add("Fan");
// setA.add("Chair");
// setA.add("Board");
// setA.add("Student");
// setB.add("Bread");
// setB.add("Rice");
// setB.add("Beans");
// setB.add("Indomie");
setB.add("Fan");

// setA.remove("Student");
// const value = setA.union(setB);
const value = setA.subset(setB);

console.log(value);
