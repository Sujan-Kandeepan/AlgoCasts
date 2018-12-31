// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let sorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
        if (sorted) break;
        sorted = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                sorted = false;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min > i) {
            const temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid), right = arr.slice(mid, arr.length);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    // let merged = [];
    // while (left.length || right.length) {
    //     if (!left.length)
    //         merged.push(right.shift());
    //     else if (!right.length)
    //         merged.push(left.shift());
    //     else if (left[0] <= right[0])
    //         merged.push(left.shift());
    //     else if (left[0] > right[0])
    //         merged.push(right.shift());
    // }
    // return merged;

    let merged = [];
    while (left.length && right.length) {
        if (left[0] <= right[0])
            merged.push(left.shift());
        else if (left[0] > right[0])
            merged.push(right.shift());
    }
    return [...merged, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
