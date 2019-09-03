'use strict';

const Node = require('./node');


class LinkedList {
  constructor() {
    this.head = null;
  }


  insert(value) {
    const newHead = new Node(value);

    if (this.head === null) {
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
  }

  valueAtK(k) {
    let length = 0;
    let current = this.head;
    while (current !== null) {
      length++;
      console.log(current.value);
      current = current.next;
    }
    for(let index of length - k - 1) {
      current = current.next;
    }
    return current;
  }



  traverse() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

module.exports = LinkedList;