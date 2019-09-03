'use strict';

const arrayReverse = require('../array-reverse');

describe('validator module performs basic validation of', () => {


  it('validate if a basic array can be reversed', () => {
    expect(arrayReverse([1, 2, 3])).toEqual([3, 2, 1]);
  });

  it('validate if an array with a negative value can be reversed', () => {
    expect(arrayReverse([1, 2, 3, -5])).toEqual([-5, 3, 2, 1]);
  });

  it('validate if an array with strings can be reversed', () => {
    expect(arrayReverse(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
  });

  it('validate an empty array can be handled', () => {
    expect(arrayReverse([])).toEqual([]);
  });
});

