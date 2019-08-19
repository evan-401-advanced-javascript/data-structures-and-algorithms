'use strict';

const LinkedList = require('./linked-list');

const linkedList = new LinkedList();

linkedList.insert(10);
linkedList.insert(20);

linkedList.includes(20);

linkedList.insert(35);

linkedList.toString();


linkedList.traverse();