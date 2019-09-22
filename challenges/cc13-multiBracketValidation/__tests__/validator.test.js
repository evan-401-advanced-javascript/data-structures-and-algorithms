'use strict';

const brackets = require('../Index');


describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  it('validates if brackets are balanced', () => {
    expect(brackets('{}')).toEqual(true);

  });
  it('validates if brackets are balanced', () => {
    expect(brackets('{[(hi)]}{}')).toEqual(true);
  });

  it('validates if brackets are balanced', () => {
    expect(brackets('')).toEqual(true);
  });
  it('validates if brackets are balanced', () => {
    expect(brackets('{')).toEqual(false);
  });

  it('validates if brackets are balanced', () => {
    expect(brackets('([hello)')).toEqual(false);
  });

  it('validates if brackets are balanced', () => {
    expect(brackets('hi)')).toEqual(false);
  });
});
