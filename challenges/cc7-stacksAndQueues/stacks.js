'use strict';

const Node = require('./node');

class Stack {
  constructor(){
    this.top = new Node(null);
  }
  push(value){
    const newHead = new Node(value);

    if (this.top.value === null) {
      this.top = newHead;
    } else {
      newHead.next = this.top;
      this.top = newHead;
    }
     console.log(this.top);
  }

  pop(){
    let current = this.top;
    this.top = current.next;
    current.next = null;
    console.log('popped 1 off top');
    return current.value;
  }

  peek(){
    let current = this.top;
    console.log('Top of stack', current.value);
  }

  traverse() {
    let current = this.top;
    while(current !== null) {
      console.log('node', current.value);
      current = current.next;
    }
  }
}

module.exports = Stack;
