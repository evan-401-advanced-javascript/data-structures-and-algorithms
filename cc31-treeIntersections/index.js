'use strict';

const Node = require('./Node');

//First tree
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

//Second Tree
const three2 = new Node(3);
const eight2 = new Node(8);
const one2 = new Node(1);
const five2 = new Node(5);
const two2 = new Node(3);

three2.left = eight2;
three2.right = one2;

eight2.left = five2;

five2.right = two2;

function findSimilarities() {
  let tracker1 = treeOne(eight);
  let tracker2 = treeOne(three2);
  const hash = new Map();
  const union = [];
  const intersection = [];

  for (let i = 0; i < tracker1.length; i++) {
    intersection.push(tracker1[i]);
    hash.set(tracker1, true);
  }

  for (let i = 0; i < tracker2.length; i++) {
    if (hash.get(tracker2[i]) === undefined) {
      hash.set(tracker2[i], true);
    } else if (hash.get(tracker2[i]) === true) {
      intersection.push(tracker2[i]);
    }
  }

  console.log(intersection)

}

const treeOne = (node, tracker = []) => {
  if (!node) {
    return tracker;
  }
  tracker.push(node.value);
  tracker = treeOne(node.left, tracker);
  tracker = treeOne(node.right, tracker);
  return tracker;
};

findSimilarities();
module.exports = treeOne;
