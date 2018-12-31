// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // let tempA = '', tempB = '';
    // for (let i = 0; i < stringA.length; i++)
    //     tempA += (stringA.charAt(i) === stringA.charAt(i).toLowerCase()
    //         && stringA.charAt(i) === stringA.charAt(i).toUpperCase())
    //         ? "" : stringA.charAt(i).toLowerCase();
    // for (let i = 0; i < stringB.length; i++)
    //     tempB += (stringB.charAt(i) === stringB.charAt(i).toLowerCase()
    //         && stringB.charAt(i) === stringB.charAt(i).toUpperCase())
    //         ? "" : stringB.charAt(i).toLowerCase();
    // stringA = tempA;
    // stringB = tempB;

    // stringA = stringA.split('').filter(char => !(char === char.toLowerCase()
    //     && char === char.toUpperCase())).join('').toLowerCase();
    // stringB = stringB.split('').filter(char => !(char === char.toLowerCase()
    //     && char === char.toUpperCase())).join('').toLowerCase();

    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

    // if (stringA.length !== stringB.length) return false;
    // for (let i = 0; i < stringA.length; i++) {
    //     let index = stringB.indexOf(stringA.charAt(i));
    //     if (stringB.indexOf(stringA.charAt(i)) === -1) return false;
    //     else stringB = stringB.substr(0, index) + stringB.sub(index + 1);
    // }
    // return true;

    // let mapA = {}, mapB = {}; // consider helper func for below 2 for loops
    // for (let char of stringA) mapA[char] = mapA[char] + 1 || 1;
    // for (let char of stringB) mapB[char] = mapB[char] + 1 || 1;
    // if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;
    // for (let key in mapA) if (mapA[key] !== mapB[key]) return false;
    // return true;

    stringA = stringA.split('').sort().join('');
    stringB = stringB.split('').sort().join('');
    return stringA === stringB; // sub-optimal complexity with sorting
}

module.exports = anagrams;
