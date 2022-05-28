function Queue() {
  var collection = [];

  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (value) {
    collection.push(value);
  };

  this.dequeue = function () {
    collection.shift();
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length;
  };
}

function priorityQueue() {
  var collection = [];

  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };

  this.dequeue = function () {
    var value = collection.shift();
    return value[0];
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

var pq = new priorityQueue();

pq.enqueue(["Facebook", 3]);
pq.enqueue(["Nairaland", 3]);
pq.enqueue(["Google", 4]);
pq.enqueue(["Gmail", 5]);
pq.enqueue(["SnapChat", 1]);
pq.enqueue(["collegeHub", 2]);

pq.print();
