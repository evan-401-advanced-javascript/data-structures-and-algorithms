'use strict';

const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }
  insert(value){
    const newHead = new Node(value);

    if (this.head = null) {
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
  }
  includes(value) {
    let current = this.head;
    while(current !== null) {
      if(current.value === value){
        console.log(true, current.value,' = ' , value);
        return true;
      }
      current = current.next;
      }
      return false;
    }

  toString() {
    let current = this.head;
    let linkedListString = 'toString ';
    while(current !== null) {
      linkedListString += current.value.toString();
      current = current.next;
    }
    console.log(linkedListString);
    return linkedListString;
  }

  traverse() {
    let current = this.head;
    while(current !== null) {
      console.log('test', current.value);
      current = current.next;
    }
  }
}

module.exports = LinkedList;
