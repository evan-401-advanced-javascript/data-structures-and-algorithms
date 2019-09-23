'use strict';

const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = new Node (null);
  }
  insert(value){
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head.value;
  }
  includes(value)  {
    let current = this.head;
    while(current.next !== null) {
      if(current.value === value){
        console.log(true, current.value,' = ' , value);
        return true;
      }
      current = current.next;
      }
      return false;
    }

  toString() {
    let current = this.head;
    let linkedListString = 'toString ';
    while(current !== null) {
      linkedListString += current.value.toString();
      current = current.next;
    }
    console.log(linkedListString);
    return linkedListString;
  }

  traverse() {
    let current = this.head;
    let linkedArray = [];
    while(current !== null) {
      console.log('test', current.value);
      linkedArray.push(current.value)
      current = current.next;
    }
    return linkedArray;
  }

  LLhead() {
    return this.head.value;
  }
}

module.exports = LinkedList;
