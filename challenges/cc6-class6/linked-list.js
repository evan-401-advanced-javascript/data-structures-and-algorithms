'use strict';

const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }
  appendRecursively(value) {
    if(this.head === null) {
      this.head = new Node(value);
    } else {
      this.appendHelper(value, this.head);
    }

  }

  appendHelper (value, current) {
    // Base
    if(current.next === null) {
      current.next = new Node(value);
    } else {
      this.appendHelper(value, current.next);
    }
  }

  insert(value){
    const newHead = new Node(value);

    if (this.head === null) {
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    return this.head.value;
  }

  insertBefore(value, newVal, current = this.head){
    const newNode = new Node(newVal);
    let counter = 0;
    while (current !== null && counter < 10) {
      if (current.next.value === value) {
        newNode.next = current.next.next;
        newNode.value = newVal;
        this.head = newNode;
        current.next = newNode;
      }
      current = current.next;
      counter++;
      return this.head.value;
    }
  }

  traverse() {
    let current = this.head;
    while(current !== null) {
      current = current.next;
    }
    return this.head.value;
  }

  traverseRecursively(current = this.head) {
    if(current === null) {
      return;
    }
    this.traverseRecursively(current.next);
    console.log(current.value);
    return current.value;
  }
}

module.exports = LinkedList;