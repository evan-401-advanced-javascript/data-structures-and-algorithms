'use strict';

const string = 'The Cat in thee hat ceat';

function repeatedWord(string) {
  const arr = string.split(' ');
  const hash = new Map();
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (hash.get(arr[i]) === undefined) {
      hash.set(arr[i].toLowerCase(), true);
    } else if (hash.get(arr[i]) === true) {
        result.push(arr[i]);
        return result;
    }
  }
}
console.log(repeatedWord(string));

module.exports = repeatedWord;