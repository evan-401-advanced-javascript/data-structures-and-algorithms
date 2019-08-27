'use strict';

const validator = require('../lib/validator');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('validate if a new value is added', () => {
    expect(validator.enqueue(20)).toEqual([5, 10, 15]);
  });
});
