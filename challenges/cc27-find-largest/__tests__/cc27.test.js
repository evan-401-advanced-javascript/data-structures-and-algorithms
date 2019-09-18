'use strict';

const largestNode = require('../index');


describe('validator module performs basic validation of', () => {

  const Node = require('../Node');

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

  it('validates if largest node is found', () => {
    expect(largestNode(ten).toEqual(20))
  });
});
