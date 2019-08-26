'use strict';

const Stack = require('./linked-list');
const Queue = require('./linked-list');

const stack = new Stack();
const queue = new Queue();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.test();

stack.pop();

stack.peek();

stack.traverse();

queue.enqueue();
queue.dequeue();