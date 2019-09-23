'use strict';

const Node = require('./node');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newRear = new Node(value);
    if (this.rear) {
      newRear.next = this.rear;
      this.rear = newRear;
    }
    if (!this.front) {
      this.front = newRear;
    }
    if (!this.rear) {
      this.rear = newRear;
    }
    console.log(newRear);
    return newRear.value;
  }

  dequeue() {
    // s
    let current = this.rear;
    console.log('this.front', this.front);
    const valueDequeued = this.front;
    while (current !== null) {
      if (current.next === this.front) {
        current.next = null;
        this.front = current;
      }
      current = current.next;
    }
    console.log('dequeued', valueDequeued);
    return valueDequeued.value;
  }

  peek() {
    console.log('peeking front of queue', this.front);
    return this.front.value;
  }

  traverseQueue() {
    let current = this.rear;
    while (current !== null) {
      console.log('traverse', current.value);
      current = current.next;
    }
  }
}

// const queue = new Queue();
//
//
// //
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
//
// queue.dequeue();
//
// queue.peek();
//
// queue.traverseQueue();

module.exports = Queue;
