// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, line = '') {
    // for (let row = 0; row < n; row++) {
    //     let line = '';
    //     for (let col = 0; col < n; col++) {
    //         if (col <= row) line += '#';
    //         else line += ' ';
    //     }
    //     console.log(line);
    // }

    if (n === row) return;
    if (n === line.length) {
        console.log(line);
        steps(n, row + 1);
        return;
    }
    line += line.length <= row ? '#' : ' ';
    steps(n, row, line);
}

module.exports = steps;
