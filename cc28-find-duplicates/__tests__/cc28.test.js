'use strict';

const LinkedList = require('../linked-list');

const linkedList = new LinkedList();

describe('validator module performs basic validation of', () => {

  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);
  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(2);
  linkedList.insert(4);

  linkedList.removeDuplicates();

  it('Can properly remove any duplicate values from a linked list', () => {
    expect(linkedList.traverse()).toEqual([4,2,1,3]);
  });

});
