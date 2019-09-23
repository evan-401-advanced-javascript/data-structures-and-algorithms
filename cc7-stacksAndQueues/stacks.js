'use strict';

const Node = require('./node');

class Stack {
  constructor(){
    this.bottom = new Node(null);
}
push(value){
  let newNode= new Node(value);
  newNode.next = this.bottom;
  this.bottom = newNode;
  return this.bottom.value;
}

  pop(){
    let current = this.bottom;
    if (this.bottom) {
      this.bottom = current.next;
      current.next = null;
    }
    return current.value;
  }

  peek(){
    let current = this.bottom;
    while(current.next !== null) {
      current = current.next;
    }
    return current.value;
  }

  traverse() {
    let current = this.bottom;
    while(current !== null) {
      current = current.next;
    }
  }
}

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
//
// stack.pop();
//
// stack.peek();
//
// stack.traverse();

module.exports = Stack;
