'use strict';

const sumOddNodes = require('../index');
const Node = require('../Node');


describe('validator module performs basic validation of', () => {

  it('validates if the correct sum is found', () => {

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

    expect(sumOddNodes(eight)).toEqual(24);
  });

  it('validates if even arrays are handled', () => {

    const ten = new Node(10);
    const fourteen = new Node(14);

    ten.right = fourteen;

    expect(sumOddNodes(ten)).toEqual(0);
  });

  it('validates if empty nodes return 0', () => {

    const ten = 0;

    expect(sumOddNodes(ten)).toEqual(0);
  });
});
