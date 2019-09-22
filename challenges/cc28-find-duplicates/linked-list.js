'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = new Node(null);
  }

  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head.value;
  }

  removeDuplicates () {
    if (!this.head || !this.head.next) {
      return;
    }

    let firstPosition;
    let secondPosition;
    let hash = new Map();
    let nodes = {};

    firstPosition = this.head;
    secondPosition = firstPosition.next;
    nodes[firstPosition.data] = true;

    while (secondPosition) {
      let data = secondPosition.data;
      if (hash.get(firstPosition) === undefined) {
        hash.set(firstPosition, true);
        firstPosition.next = secondPosition.next;
      } else if (hash.get(firstPosition) === true) {
        firstPosition = secondPosition;
      }
      secondPosition = secondPosition.next;
    }
  };
  
  traverse() {
    let current = this.head;
    let linkedArray = [];
    while (current.next !== null) {
      console.log('test', current.value);
      linkedArray.push(current.value)
      current = current.next;
    }
    console.log(linkedArray);
    return linkedArray;
  }
}

module.exports = LinkedList;
