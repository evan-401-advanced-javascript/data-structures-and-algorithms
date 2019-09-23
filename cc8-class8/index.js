'use strict';

const LinkedList = require('./linked-list');

// list !== linked list

const linkedList = new LinkedList();

linkedList.insert(10);
linkedList.insert(20);
linkedList.insert(30);
linkedList.insert(40);
linkedList.insert(50);

linkedList.valueAtK(2);

linkedList.traverse();
