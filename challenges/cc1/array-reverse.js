'use strict'

const arrayReverse = () => {
let array = [1,2,3,4,-5];
let middle = array.length / 2;
let arrStart;

for (let i = 0; i < middle; i++) {
    arrStart = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = arrStart;
}
console.log(array)
};

arrayReverse();
