// function hash(string, max) {
//   var hash = 0;
//   for (var i = 0; i < string.length; i++) {
//     hash += string.charCodeAt(i);
//   }
//   return hash % max;
// }

function hash(string, max) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
}

function HashTable() {
  let storage = [];
  const storageLimit = 4;

  this.print = function () {
    console.log(storage);
  };

  this.add = function (key, value) {
    let index = hash(key, storageLimit);

    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      var inserted = false;

      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] === value;
          inserted = true;
        }
      }

      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function (key) {
    let index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookUp = function (key) {
    let index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        console.log(storage[index]);
        if (storage[index][i] === undefined) {
          return undefined;
        } else if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
}

const ht = new HashTable();
ht.add("theRelest", "Remigius");
ht.add("myGuy", "Abraham");
ht.add("myNiggar", "Storm");
ht.add("myBro", "Peter");
ht.add("myGuy", "Moses");
ht.add("myClick", "lowed");
ht.add("mybroJ", "Sure");
ht.add("myChidi", "Calm");

ht.remove("theRelest");

const value = ht.lookUp("myClick");

console.log(value);

ht.print();
