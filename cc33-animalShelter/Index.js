'use strict';

class AnimalShelter {
  constructor() {
    this.catQueue = [];
    this.dogQueue = [];
    this.id = 1;
  }

  enqueue(animal) {
    if (animal === 'cat') {
      this.catQueue.push(this.id);
    } else {
      this.dogQueue.push(this.id);
    }
    this.id++;
    return ('cats: ' + this.catQueue + ' dogs: ' + this.dogQueue)
  }

  dequeue(preference) {
    if ( preference === 'cat') {
      return 'you get cat # ' + this.catQueue.shift()
    }  else if ( preference === 'dog') {
      return 'you get dog # ' + this.dogQueue.shift()
    } else {
      let oldestCat = this.catQueue.shift();
      let oldestDog = this.dogQueue.shift();
      if (oldestCat < oldestDog) {
        this.dogQueue.push(oldestDog);
        return 'surprise! you get a cat named ' + oldestCat;
      } else {
        this.catQueue.push(oldestCat);
        return 'surprise! you get a dog named ' + oldestDog;
      }
    }
}
}
const queue = new AnimalShelter();

queue.enqueue('cat');
queue.enqueue('cat');
queue.enqueue('dog');
queue.enqueue('cat');
queue.enqueue('dog');
console.log(queue.enqueue('cat'));
console.log(queue.dequeue('cat'));
console.log(queue.dequeue('dog'));
console.log(queue.dequeue('idk'));
console.log(queue.dequeue('idk'));
console.log(queue.dequeue('idk'));

module.exports = AnimalShelter;
