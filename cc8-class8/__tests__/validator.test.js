'use strict';

const LinkedList = require('../linked-list');
const linkedList = new LinkedList;

describe('validator module performs basic validation of', () => {


  it('validates if values can be added normally', () => {
    linkedList.insert(10);
    linkedList.insert(20);
    expect(linkedList.insert(30)).toEqual(30);
  });

  it('validates what the value is at k', () => {
    expect(linkedList.valueAtK(0)).toEqual(10);
    expect(linkedList.valueAtK(1)).toEqual(20);
    expect(linkedList.valueAtK(2)).toEqual(30);
  });

  it('validates that the linked list can be travered', () => {
    expect(linkedList.traverse()).toEqual(30);
  });

});

