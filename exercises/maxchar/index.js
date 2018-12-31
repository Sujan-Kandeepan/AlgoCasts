// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let occurs = {}, maxNum = 0, maxChar = '';
    for (let char of str) occurs[char] = occurs[char] + 1 || 1;
    for (let char in occurs) {
        if (occurs[char] > maxNum) {
            maxNum = occurs[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;
