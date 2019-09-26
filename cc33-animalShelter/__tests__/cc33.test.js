'use strict';

const AnimalShelter = require('../Index');

const queue = new AnimalShelter();

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out
  queue.enqueue('cat');
  queue.enqueue('cat');
  queue.enqueue('dog');
  queue.enqueue('cat');
  queue.enqueue('dog');

  it('validate if a new animal is added', () => {
    expect(queue.enqueue('cat')).toEqual('cats: 1,2,4,6 dogs: 3,5');
  });
  it('validate if the 1st cat is adopted', () => {
    expect(queue.dequeue('cat')).toEqual("you get cat # 1");
  });
  it('validate if a random animal can be adopted', () => {
    expect(queue.dequeue('idk')).toEqual("surprise! you get a cat named 2");
  });
});
