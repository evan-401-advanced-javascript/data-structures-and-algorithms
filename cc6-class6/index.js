'use strict';

const LinkedList = require('./linked-list');

// list !== linked list

const linkedList = new LinkedList();

linkedList.insert(10);
linkedList.insert(20);
linkedList.insert(30);

linkedList.insertBefore(20, 15);
linkedList.appendRecursively(40);

linkedList.traverse();
