'use strict';

const Stack = require('../stacks');
const Queue = require('../queues');

const stack = new Stack();
const queue = new Queue();

describe('validator module performs basic validation of', () => {


  it('validate if push pushes a new value', () => {
    expect(stack.push(1)).toEqual(1);
  });


it('validate if push pushes multiple values', () => {
    expect(stack.push(2)).toEqual(2);
    expect(stack.push(3)).toEqual(3);
    expect(stack.push(4)).toEqual(4);
  });

  it('validate if pop remove an item off the top of the stack', () => {
    expect(stack.pop()).toEqual(4);
  });

  it('validate if pop until an empty stack will return the empty stack', () => {
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.pop()).toEqual(null);
  });

  it('Can successfully peek the next item on the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toEqual(1);
  });

  it('Can successfully instantiate an empty stack', () => {
    //isn't this the first thing im doing?
  });


  ///////////////////////QUEUES//////////////////////

  it('Can successfully enqueue into a queue', () => {
    expect(queue.enqueue(1)).toEqual(1);
  });


  it('Can successfully enqueue multiple values into a queue', () => {
    expect(queue.enqueue(2)).toEqual(2);
    expect(queue.enqueue(3)).toEqual(3);
    expect(queue.enqueue(4)).toEqual(4);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    expect(queue.dequeue()).toEqual(1);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    expect(queue.peek()).toEqual(2);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
     queue.enqueue();
      queue.enqueue();
      queue.enqueue();
      expect(queue.enqueue()).toEqual(undefined);
  });

  it('Can successfully instantiate an empty queue', () => {
    //isn't this the first thing im doing?
  });

});



  //
  //
  //
  // Can successfully empty a queue after multiple dequeues
  // Can successfully instantiate an empty queue
