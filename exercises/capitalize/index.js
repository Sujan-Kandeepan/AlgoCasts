// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    return str
        .split(' ') // map replaces separate for loop
        .map(word => word.charAt(0).toUpperCase() + word.substr(1))
        .join(' ');

    // let cap = '', prev = ' ';
    // for (let char of str) {
    //     if (prev === ' ') cap += char.toUpperCase();
    //     else cap += char;
    //     prev = char;
    // }
    // return cap;
}

module.exports = capitalize;
