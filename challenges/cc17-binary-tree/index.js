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

let leafArr =[];
const recursiveDepthFirst = (node) => {

  if(node === null) {
    return
  }
  if(node.left == null && node.right == null) {
    leafArr.push(node.value);
  }

  console.log(node.value);
  recursiveDepthFirst(node.left); // vinicio - "pushing" values into the call stack
  recursiveDepthFirst(node.right); // vinicio - "pushing" values into the call stack
};

recursiveDepthFirst(ten);
console.log(leafArr);