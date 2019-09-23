'use strict';

const repeatedWord = require('../index');

describe('validator module performs basic validation of', () => {


  it('validates that the first repeating word is returned', () => {
  let string = 'the cat in the hat';

    expect(...repeatedWord(string)).toEqual('the');
  });

  it('validates that the first repeating word is returned regardless of caps', () => {
    let string = 'star wars is better then star trek';

    expect(...repeatedWord(string)).toEqual('star');
  });

  it('validates that a one line array returns nothing', () => {
    let string = 'star';

    expect(repeatedWord(string)).toEqual(undefined);
  });

});
