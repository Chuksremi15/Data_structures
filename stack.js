function isPalindrum(word) {
  let reversedWord = "";
  let wordArray = word.split("");

  for (let i = 0; i < word.length; i++) {
    reversedWord += wordArray.pop();
  }

  if (word === reversedWord) {
    console.log(word + " is a palindrum");
  } else {
    console.log(word + " is not palindrum");
  }
}

isPalindrum("racecar");

var Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();

myStack.push("House");
myStack.push("Car");
myStack.push("Dishwasher");
myStack.push("Bedroom");
myStack.push("Browser");
myStack.push("Parlor");

console.log(myStack.pop());
console.log(myStack.storage);

var stack = function () {
  this.storage = {};
  this.count = 0;

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count == 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };
};
