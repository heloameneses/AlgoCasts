// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;

// Solution #1
// let array = []
// for (let i = 0; i < str.length; i++) {
//   array.unshift(str.charAt(i));
// }
// return array.join('');

// Solution #2
// let array = str.split('');
// return array.reverse().join('')

// Solution #3
// let reversed = ''
// for (let char of str) {
//   reversed = char + reversed;
// }
// return reversed;

// Solution #4
// return str.split('').reduce((reversed, character) => {
//   let result = character + reversed
//   console.log(result)
//   return result
// }, '')