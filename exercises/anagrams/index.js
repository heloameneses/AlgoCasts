// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const cleanStr = (str) => str.replace(/[^\w]/g, '').toLowerCase()
  const sortStr = str => str.split('').sort().join('');
  const strA = sortStr(cleanStr(stringA));
  const strB = sortStr(cleanStr(stringB));

  return strA === strB;
}

// Solution #1
// const sanitize = (str) => str.replace(/[^\w]/g,'').toLowerCase();
// const strA = sanitize(stringA);
// const strB = sanitize(stringB);
// if (strA.length !== strB.length) {
//   return false;
// }
// const mapA = {};
// const mapB = {};
// for (const char of strA) {
//   if (mapA[char]) {
//     mapA[char] += 1;
//   } else {
//     mapA[char] = 1;
//   }
// }
// for (const char of strB) {
//   if (mapB[char]) {
//     mapB[char] += 1;
//   } else {
//     mapB[char] = 1;
//   }
// }
// for (const char in mapA) {
//   if (mapA[char] !== mapB[char]) {
//     return false;
//   }
// }
// return true;

// Solution #2
// function buildCharMap(str) {
//   const charMap = {};
//   const cleanString = str.replace(/[^\w]/g, '').toLowerCase();
//   for (const char of cleanString) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }
// function anagrams(stringA, stringB) {
//   const mapA = buildCharMap(stringA);
//   const mapB = buildCharMap(stringB);
//   if (Object.keys(mapA).length !== Object.keys(mapB).length) {
//     return false;
//   }
//   for (const char in mapA) {
//     if (mapA[char] !== mapB[char]) {
//       return false;
//     }
//   }
//   return true;
// }


module.exports = anagrams;
