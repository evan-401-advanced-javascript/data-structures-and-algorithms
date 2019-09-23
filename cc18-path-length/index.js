'use strict';

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

let parentFound = false;
let childFound = false;
let path = 0;

const pathLength = (node, parent, child) => {
  if (!node) {
    return;
  }
  if (!childFound) {
    pathLength(node.left, parent, child);
    pathLength(node.right, parent, child);
  }
  if (childFound && !parentFound) {
    path++;
    if (node.value === parent) {
      path--;
      parentFound = true;
    }
  }
  if (node.value === child) {
    childFound = true;
  }
};

pathLength(ten, 10, 20);
console.log(path);
