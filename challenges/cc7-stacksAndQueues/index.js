'use strict';

const Stack = require('./linked-list');

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.pop();

stack.peek();

stack.traverse();