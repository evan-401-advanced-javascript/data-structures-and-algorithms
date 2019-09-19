'use strict';

const LinkedList = require('./linked-list');

const linkedList = new LinkedList();

linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(1);
linkedList.insert(2);
linkedList.removeDuplicates();
linkedList.traverse();