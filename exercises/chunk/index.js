// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // let result = [], temp = [], iter = 0;
    // for (let element of array) {
    //     temp.push(element);
    //     iter = (iter + 1) % size;
    //     if (iter === 0) {
    //         result.push(temp);
    //         temp = [];
    //     }
    // }
    // if (iter !== 0) result.push(temp);
    // return result;

    // let result = [], temp = [];
    // for (let element of array) {
    //     temp.push(element);
    //     if (temp.length === size) {
    //         result.push(temp);
    //         temp = [];
    //     }
    // }
    // if (temp.length > 0) result.push(temp);
    // return result;

    // const result = [];
    // for (let element of array) {
    //     const last = result[result.length - 1];
    //     if (!last || last.length === size) result.push([element]);
    //     else last.push(element);
    // }
    // return result;

    let result = [];
    for (let i = 0; i < array.length; i += size)
        result.push(array.slice(i, i + size));
    return result;
}

module.exports = chunk;
