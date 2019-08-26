'use strict';

const Node = require('./node');

class Stack {
  constructor(){
    this.head = null;
  }
  push(value){
    const newHead = new Node(value);

    if (this.head === null) {
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
     console.log(this.head);
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

  test() {
    if (this.top) {
      let itemToPop = this.top;
      this.top = this.top.next;

      return itemToPop;
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

class Queue{
  enqueue () {
    const newRear = new Node(value);
    if (this.rear) {
      newRear.next = this.rear;
      this.rear = newRear;
    }
    this.rear = newRear;
    console.log(newRear);
    return newRear;

  }

  dequeue() {
    let current = this.front;
    let valueDequeued = this.front;
    while(current !== null) {
      if (current.next === this.front) {
        current.next = null;
        this.front = current;
      }
      current = current.next
    }
    console.log(valueDequeued);
    return valueDequeued;
  }
}

module.exports = Stack;
module.exports = Queue;
