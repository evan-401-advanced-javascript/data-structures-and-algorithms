'use strict';

const Node = require('./node');

class List {
  constructor() {
    this.head = new Node(null);
  }

  mergeLists(LL1, LL2) {
    const newHead = new Node(value);
    let current1 = LL.head;
    let current2 = LL.head;
    while (current1.next !== null) {
      if (current2.next !== null) {
      } else {
        const LLStore1 = current1.next;
        const LLStore2 = current2.next;

        current1.next = current2;
        current1.next.next = LLStore1;

        current1 = current1.next.next;
        current2 = current2.next;
      }
      current1.next = current2;
    }
  }
}


module.exports = List;
