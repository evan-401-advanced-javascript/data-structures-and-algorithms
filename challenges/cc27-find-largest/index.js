"use strict";

const Node = require('./Node');

const ten = new Node(10);
const seven = new Node(7);
const five = new Node(5);
const one = new Node(1);
const two = new Node(2);
const eleven = new Node(11);
const twelve = new Node(12);
const twenty = new Node(20);

five.left = one;
five.right = two;

ten.left = seven;
ten.right = five;

seven.left = eleven;
seven.right = twelve;

one.right = twenty;


let largest = null;

const pathLength = (node, largest) => {

  if(!node) {
    return
  }

  if(!largest || largest < node.value) {
    largest = node.value
  }

    pathLength(node.left, largest);
    pathLength(node.right, largest);

    return largest;
};



// O(n) time, O(h) space

pathLength(ten);
console.log(largest);

module.exports = pathLength;
