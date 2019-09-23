'use strict';

const LinkedList = require('../linked-list');
const linkedList = new LinkedList;

describe('validator module performs basic validation of', () => {


  it('validates if values can be added normally', () => {
    linkedList.insert(10);
    linkedList.insert(20);
    expect(linkedList.insert(30)).toEqual(30);
  });

  it('validates if values can be added before a passed value', () => {
    expect(linkedList.insertBefore(20,15)).toEqual(15);
  });

  it('validates if a value can be added recursively', () => {
    linkedList.appendRecursively(40);
    expect(linkedList.traverse()).toEqual(15);
  });

  it('validates if linked list can be traversed recursively', () => {
    expect(linkedList.traverseRecursively()).toEqual(15);
  });

});

