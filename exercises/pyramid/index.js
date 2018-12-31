// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, line = '#') {
    // for (let row = 0; row < n; row++) {
    //     let line = '#';
    //     for (let col = 1; col < n; col++) {
    //         if (col <= row) line = '#' + line + '#';
    //         else line = ' ' + line + ' '; 
    //     }
    //     console.log(line);
    // }

    // const mid = n - 1;
    // for (let row = 0; row < n; row++) {
    //     let line = '';
    //     for (let col = 0; col < 2 * n - 1; col++) {
    //         if (mid - row <= col && mid + row >= col) line += '#';
    //         else line += ' ';
    //     }
    //     console.log(line);
    // }

    if (n === row) return;
    if (n * 2 - 1 === line.length) {
        console.log(line);
        pyramid(n, row + 1);
        return;
    }
    if (line.length <= row * 2 - 1) line = '#' + line + '#';
    else line = ' ' + line + ' ';
    pyramid(n, row, line);

    // const mid = n - 1;
    // if (n === row) return;
    // if (n * 2 - 1 === line.length) {
    //     console.log(line); // line should be '' instead of '#'
    //     pyramid(n, row + 1);
    //     return;
    // }
    // if (mid - row <= line.length && mid + row >= line.length)
    //     line = line + '#';
    // else line = line + ' ';
    // pyramid(n, row, line);
}

module.exports = pyramid;
