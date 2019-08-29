'use strict';

const List = require('../Index');

const megge = new List();

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('validate if a new value is added', () => {
    merge.enqueue(20);
    expect(merge.input).toEqual([5,10,15,20]);
    expect(merge.dequeue()).toEqual([5])
  });
});
