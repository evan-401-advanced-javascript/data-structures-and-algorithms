'use strict';

function brackets(string) {
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      stack.push(string[i]);
    } else if (string[i] === ')' || string[i] === '}' || string[i] === ']') {
      if (stack.length === 0) {
        console.log(false);
        return false;
      } if (string[i] === stack[0]) {
        stack.pop();
      }
    }
  }
  if (stack.length === 0) {
    console.log(true);
    return true;
  } if (stack.length > 0) {
    console.log(false);
    return false;
  }
}

module.exports = brackets;
