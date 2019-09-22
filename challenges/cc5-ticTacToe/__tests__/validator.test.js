'use strict';

const ticTacToe = require('../index');

describe('validator module performs basic validation of', () => {

  it('validate if a new value is added', () => {
    let array = [
      ['x','x','x'],
      ['o','o','x'],
      ['x','o','o']];

    expect(ticTacToe(array)).toEqual('x won horizontally')
  });
});
