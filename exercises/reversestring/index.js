// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // var rev = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     rev += str[i];
    // }
    // return rev;

    // return str
    //     .split('')
    //     .reverse()
    //     .join('');

    // let rev = '';
    // for (let char of str) {
    //     rev = char + rev;
    // }
    // return rev;

    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
