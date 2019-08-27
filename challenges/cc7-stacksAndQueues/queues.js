'use strict';

const Node = require('./node');

class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue (value) {
    const newRear = new Node(value);
    if (this.rear) {
      newRear.next = this.rear;
      this.rear = newRear;
    }
    if(!this.front) {
      this.front = newRear;
    }
    if(!this.rear) {
      this.rear = newRear;
    }
    console.log(newRear);
    return newRear;

  }

  dequeue() {
    let current = this.front;
    console.log('this.front', this.front);
    let valueDequeued = this.front;
    while(current.next !== null) {
      if (current.next === this.front) {
        current.next = null;
        this.front = current;
      }
      current = current.next
    }
    console.log('dequeued', valueDequeued);
    return valueDequeued;
  }

  traverseQueue() {
    let current = this.front;
    while(current !== null) {
      console.log('traverse', current.value);
      current = current.next;
    }
  }
}

module.exports = Queue;
