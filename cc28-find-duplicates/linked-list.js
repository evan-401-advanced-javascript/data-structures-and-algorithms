'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = new Node(null);
  }

  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head.value;
  }

  removeDuplicates() {
    const hash = new Map();
    let frontPosition = this.head;
    let backPosition = null;
    const uniqueValues = [];
    let count = 0;

    if (!this.head || !this.head.next) {
      return;
    }

    while (frontPosition) {
      uniqueValues.push(frontPosition.value);

      if (hash.get(uniqueValues[count]) === undefined) {
        hash.set(uniqueValues[count], true);
        backPosition = frontPosition;
        frontPosition = frontPosition.next;
      } else if (hash.get(uniqueValues[count]) === true) {
        frontPosition = frontPosition.next;
        backPosition.next = frontPosition;
      }
      count++;
    }
  }
  
  traverse() {
    let current = this.head;
    const linkedArray = [];
    while (current.next !== null) {
      linkedArray.push(current.value);
      current = current.next;
    }
    console.log(linkedArray);
    return linkedArray;
  }
}

module.exports = LinkedList;
