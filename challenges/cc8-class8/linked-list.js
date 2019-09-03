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
    return this.head.value;
  }

  valueAtK(k) {
    let length = 0;
    let current = this.head;
    while (current !== null) {
      length++;
      console.log(current.value);
      current = current.next;
    }
    current = this.head;
    for(let i = 0; i < length - k - 1; i++) {
      current = current.next;
    }
    return current.value;
  }

  traverse() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
    return this.head.value;
  }
}

module.exports = LinkedList;