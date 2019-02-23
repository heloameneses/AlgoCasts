// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}

// Solution #1
// let str = n.toString();
// let arr = str.split('')
// if (arr[0] === '-') {
//   arr = arr.slice(1);
//   str = '-' + arr.reverse().join('');
//   return parseInt(str);
// }
// return parseInt(arr.reverse().join(''));

// Solution #2
// const sign = Math.sign(n);
// let array = n.toString().split('');
// if (sign === -1) {
//   array.slice(1);
//   let reversed = parseInt(array.reverse().join(''))
//   return reversed * sign;
// }
// return parseInt(array.reverse().join(''));

module.exports = reverseInt;