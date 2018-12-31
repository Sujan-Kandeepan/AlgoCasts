// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let spiral = [], x = 0, y = 0, dir = 'right';
    for (let row = 0; row < n; row++) {
        let slice = [];
        for (let col = 0; col < n; col++)
            slice.push(0)
        spiral.push(slice);
    }
    for (let num = 1; num <= n * n; num++) {
        spiral[y][x] = num;
        if (dir === 'right') {
            if (x === n - 1 || spiral[y][x + 1] > 0) {
                dir = 'down';
                y++;
            }
            else x++;
        }
        else if (dir === 'down') {
            if (y === n - 1 || spiral[y + 1][x] > 0) {
                dir = 'left';
                x--;
            }
            else y++;
        }
        else if (dir === 'left') {
            if (x === 0 || spiral[y][x - 1] > 0) {
                dir = 'up';
                y--;
            }
            else x--;
        }
        else if (dir === 'up') {
            if (y === 0 || spiral[y - 1][x] > 0) {
                dir = 'right';
                x++;
            }
            else y--;
        }
    }
    return spiral;

    // const spiral = [];
    // for (let i = 0; i < n; i++) {
    //     spiral.push([]);
    // }
    // let counter = 1, startRow = 0, endRow = n - 1,
    //     startCol = 0, endCol = n - 1;
    // while (startRow <= endRow && startCol <= endCol) {
    //     for (let i = startCol; i <= endCol; i++)
    //         spiral[startRow][i] = counter++;
    //     startRow++;
    //     for (let i = startRow; i <= endRow; i++)
    //         spiral[i][endCol] = counter++;
    //     endCol--;
    //     for (i = endCol; i >= startCol; i--) 
    //         spiral[endRow][i] = counter++;
    //     endRow--;
    //     for (i = endRow; i >= startRow; i--)
    //         spiral[i][startCol] = counter++;
    //     startCol++;
    // }
    // return spiral;
}

module.exports = matrix;
