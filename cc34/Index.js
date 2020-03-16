function eenieMeenie (arr, k) {
  if (arr.length < 1) {
    return null;
  }
  while (arr.length > 1) {
    for ( let i = 0; i < k; i++) {
      let temp = arr.shift();
      arr.push(temp);
    }
    arr.shift();
  }
  return arr[0];
}


console.log(eenieMeenie(['A','B','C','D','E'], 2));

module.exports = eenieMeenie;