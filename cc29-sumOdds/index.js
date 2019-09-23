'use strict';

const Node = require('./Node');

const eight = new Node(8);
const three = new Node(3);
const one = new Node(1);
const six = new Node(6);
const four = new Node(4);
const seven = new Node(7);
const ten = new Node(10);
const fourteen = new Node(14);
const thirteen = new Node(13);

eight.left = three;
eight.right = ten;

three.left = one;
three.right = six;

six.left = four;
six.right = seven;

ten.right = fourteen;

fourteen.left = thirteen;

const sumOddNodes = (node, oddSum = 0) => {
  if (!node) {
    return oddSum;
  }

  if (node.value % 2 !== 0) {
    oddSum += node.value;
  }

  oddSum = sumOddNodes(node.left, oddSum);
  oddSum = sumOddNodes(node.right, oddSum);
  return oddSum;
};

console.log(sumOddNodes(eight));

module.exports = sumOddNodes;
