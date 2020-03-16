'use strict';

const eenieMeenie = require('../Index');

describe('validator module performs basic validation of', () => {

  it('validate if we are left with the right element', () => {
    expect(eenieMeenie(['A','B','C','D','E'], 2)).toBe('D');
  });
  it('validate if we are left with the right element', () => {
    expect(eenieMeenie([], 2)).toBe(null);
  });
});
