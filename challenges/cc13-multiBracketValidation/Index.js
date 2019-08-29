'use strict';

function brackets (string) {
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      stack.push(string[i]);
    } else if (string[i] === ')' || string[i] === '}' || string[i] === ']') {
      if (stack.length === 0) {
        console.log(false);
        return false;
      }else if (string[i] === stack.pop()) {
        stack.pop();
        console.log('popped charecter');
      }
    }
  }
  if (stack.length === 0) {
    console.log(true);
    return true
  } else if (stack.length > 0) {
    console.log(false);
    return false
  }
}

brackets('([]){hello}');

module.exports = brackets;