'use strict';

const PseudoQueue = require('../Index');

const queue = new PseudoQueue();

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('validate if a new value is added', () => {
    queue.enqueue(20);
    expect(queue.input).toEqual([5,10,15,20]);
    expect(queue.dequeue()).toEqual([5])
  });
});
