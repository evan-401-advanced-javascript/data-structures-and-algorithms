'use strict';

function ticTacToe(array) {
  // checking for horizontal wins
  let win = false;
  for (const index of array) {
    if (index[0] === index[1] && index[0] === index[2]) {
      console.log(`${index[0]} won horizontally! ${index}`);
      win = true;
      return `${index[0]} won horizontally!`;
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[0][i] === array[1][i] && array[0][i] === array[2][i]) {
      console.log(`${array[i][i]} won vertically! ${array[0][i]}, ${array[1][i]}, ${array[2][i]} `);
      win = true;
      return `${index[0]} won vertically!`;
    }
  }
  if ((array[0][0] === array[1][1] && array[0][0] === array[2][2]) || (array[2][0] === array[1][1] && array[2][0] === array[0][2])) {
    console.log(`${array[1][1]} won diagonally!`);
    win = true;
    return `${index[0]} won diagonally!`;
  }
  if (win === false) {
    console.log('Cat\'s game.');
  }
}

module.exports = ticTacToe();
