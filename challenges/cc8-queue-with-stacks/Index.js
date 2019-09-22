'use strict';

class PseudoQueue {
  constructor() {
    this.input = [5,10,15];
    this.output = [];
  }

  enqueue(value) {
    this.input.push(value);
    console.log('pushing ', this.input);
  }


  dequeue() {
  //push input into output backwards
    for(let i = 0; i < this.input.length; i++) {
      this.output.push(this.input[i]);
    }
    for(let i = 0; i < this.output.length; i++) {
      this.input.pop();
    }
    return this.output.pop();
  }
}
const queue = new PseudoQueue();

queue.enqueue(20);
queue.dequeue();

module.exports = PseudoQueue;