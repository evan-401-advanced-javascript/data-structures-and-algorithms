'use strict';

function brackets (string) {
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      stack.push(string[i]);
    } else if (string[i] === ')' || string[i] === '}' || string[i] === ']') {
      if (string[i] === stack.pop()) {
        console.log('popped charecter', stack.pop());
      }
    }
    console.log('stack', stack);
  }
}

brackets('{([hi])}');

module.exports = brackets;