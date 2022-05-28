function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.loop = function () {
    var currentNode = head;
    for (let i = 0; i < length; i++) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  };

  this.remove = function (element) {
    var previousNode;
    var currentNode = head;

    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.indexOf = function (element) {
    var currentNode = head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }

    return -1;
  };

  this.elementAt = function (index) {
    var currentNode = head;
    var count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  this.myElementAt = function (index) {
    var currentNode = head;
    let count = -1;

    while (currentNode) {
      count++;
      if (count === index) {
        return currentNode.element;
      }
      currentNode = currentNode.next;
    }

    return undefined;
  };

  this.addAt = function (index, element) {
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };

  this.removeAt = function (index) {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= length) {
      return null;
    }

    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentIndex.next;
    }

    length--;
    return currentNode.element;
  };

  this.deleteDuplicate = function (head) {
    if (head === null || head.next === null) {
      return head;
    }

    var cur = head;

    console.log(cur.next.element);

    while (cur.next) {
      if (cur.element === cur.next.element) {
        cur.next = cur.next.next;
      } else {
        cur = cur.next;
      }
    }
    return head;
  };

  this.reverseList = function (head) {
    if (head === null || head.next === null) {
      return head;
    }

    console.log(head);

    var current = head;
    var previouse = null;

    while (current !== null) {
      let next = current.next;

      current.next = previouse;

      previouse = current;

      current = next;
    }
    return previouse;
  };
}

var conga = new LinkedList();

conga.add("The relest");
conga.add("The Greatest");
conga.add("Love");
conga.add("Stream");
conga.add("ALive");
conga.add("ALive");
conga.add("ALive");
conga.add("ALive");
conga.add("Clap");
conga.add("Over");
conga.add("special");
conga.add("better");

// conga.remove("Clap");
// conga.remove("Stream");

var head = conga.head();

console.log(head);

// console.log(conga.deleteDuplicate(head));
// console.log(conga.reverseList(head));
