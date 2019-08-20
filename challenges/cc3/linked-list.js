'use strict';

const Node = require('./node');

let recursion = 0;

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
      const newTail = new Node(value);
      current.next = newTail;
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
  }

  insertBefore(value, newVal, current = this.head){
    const newNode = new Node(newVal);

    while (current !== null) {
      if (current.value === value) {
        console.log('hello');
        this.head = newNode;
      }
      console.log(current.value);
      current = current.next;
    }
  }


  traverseRecursively(current = this.head) {
    // Base Case
    if(current === null) {
      return;
    }
    // Recursive
    this.traverseRecursively(current.next);
    // Vinicio - the entire recursive process needs to finish befoce
    // I execute this
    console.log(current.value);
    recursion++;
  }
}

module.exports = LinkedList;