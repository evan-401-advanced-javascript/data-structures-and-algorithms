'use strict';

const validatorClass = require ('lib/validator');
const validator = new validatorClass();

describe('validator module performs basic validation of', () => {

  it('can instantiate an empty linked list', () => {
    expect(validator.this.head).toEqual(undefined)
  })

});