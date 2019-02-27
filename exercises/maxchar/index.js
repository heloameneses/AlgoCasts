// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char;
    }
  }

  return maxChar;
}

// Solution #1
// const map = {};
// for (let char of str) {
//   if (map[char]) {
//     map[char] += 1;
//   } else {
//     map[char] = 1;
//   }
// }
// let highest = '';
// for (let key in map) {
//   if (highest === '') {
//     highest = key;
//   } 
//   if (map[key] > map[highest]) {
//     highest = key;
//   }
// }
// return highest;

// Solution #2
// let charMap = {};
// for (let char of str) {
//   charMap[char] = charMap[char] + 1 || 1;
// }
// let highest = '';
// for (let char in charMap) {
//   if (highest === '' || charMap[char] > charMap[highest]) {
//     highest = char;
//   }
// }
// return highest;

module.exports = maxChar;
