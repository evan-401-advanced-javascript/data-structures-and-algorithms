'use strict';

const Stack = require('./stacks');
const Queue = require('./queues');

const stack = new Stack();
const queue = new Queue();

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
//
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.dequeue();
queue.traverseQueue();