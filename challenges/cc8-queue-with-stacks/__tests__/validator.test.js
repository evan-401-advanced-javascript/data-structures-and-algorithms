'use strict';

const validator = require('../lib/validator');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('validate if push pushes a new value', () => {
    expect(validator.pushIt(7)).toEqual(7);

  });


  // Structure and Testing
  // Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.
  //
  // Write tests to prove the following functionality:
  //
  // Can successfully push onto a stack
  // Can successfully push multiple values onto a stack
  // Can successfully pop off the stack
  // Can successfully empty a stack after multiple popsΩ
  // Can successfully peek the next item on the stack
  // Can successfully instantiate an empty stack
  // Can successfully enqueue into a queue
  // Can successfully enqueue multiple values into a queue
  // Can successfully dequeue out of a queue the expected value
  // Can successfully peek into a queue, seeing the expected value
  // Can successfully empty a queue after multiple dequeues
  // Can successfully instantiate an empty queue
