'use strict';

const Node = require('./node');

class Stack {
  constructor(){
    this.head = null;
  }
  push(value){
    const newHead = new Node(value);
    let current;

    if (this.head === null) {
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
  }

  pop(){
    let current = this.head;

    while (current !== null){
      let previous = current;
      current = current.next;

      if(current.next === null) {
        previous.next = current.next;
        console.log('popped 1');
        return previous.value;
      }
    }
  }

  peek(){
    let current = this.head;
    while(current.next !== null) {
      current = current.next;
    }
    console.log('Top of stack', current.value);
  }

  traverse() {
    let current = this.head;
    while(current !== null) {
      console.log('test', current.value);
      current = current.next;
    }
  }
}

module.exports = Stack;
