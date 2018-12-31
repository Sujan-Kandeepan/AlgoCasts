// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // let used = [false, false, false, false, false], count = 0;
    // for (let char of str) {
    //     if (char.toLowerCase() === 'a') used[0] = true;
    //     if (char.toLowerCase() === 'e') used[1] = true;
    //     if (char.toLowerCase() === 'i') used[2] = true;
    //     if (char.toLowerCase() === 'o') used[3] = true;
    //     if (char.toLowerCase() === 'u') used[4] = true;
    // }
    // for (const val of used) if (val) count++;
    // return count;

    // let count = 0;
    // for (const vowel of ['a', 'e', 'i', 'o', 'u'])
    //     if (str.toLowerCase().includes(vowel))
    //         count++;
    // return count;

    const matches = str.match(/[aeiou]/gi) || [];
    return matches.length;
}

module.exports = vowels;
