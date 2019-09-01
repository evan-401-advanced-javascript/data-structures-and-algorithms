'use strict';

const LinkedList = require('../linked-list');

const linkedList = new LinkedList();

describe('validator module performs basic validation of', () => {

  it('Can successfully instantiate an empty linked list / Can properly insert into the linked list', () => {
    // Im assuming that showing I can insert into a new linked list shows that I can instantiate it.
    expect(linkedList.insert(1)).toEqual(1);
  });

  it('The head property will properly point to the first node in the linked list & Can properly insert multiple nodes into the linked list', () => {
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.LLhead()).toEqual(3);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    expect(linkedList.includes(2)).toEqual(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(linkedList.includes(4)).toEqual(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    expect(linkedList.traverse()).toEqual([3,2,1,null]);
  });

});
