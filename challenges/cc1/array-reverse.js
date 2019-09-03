'use strict'

const arrayReverse = (array) => {
let middle = array.length / 2;
let arrStart;

for (let i = 0; i < middle; i++) {
    arrStart = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = arrStart;
}
    return array;
};


module.exports = arrayReverse;