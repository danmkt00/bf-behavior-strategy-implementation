/**
 * Counts how many times each character appears in a string.
 *
 * @param {string} [text=''] - The string of characters to count.
 * @returns {number{}} An object of key/value pairs counting each character.
 *
 * @example
 *
 * countCharacters('hi'); // { h: 1, i: 1 }
 *
 * @example
 *
 * countCharacters('hiiii'); // { h: 1, i: 4 }
 *
 */
const countCharacters = (text = '') => {
    let result = {};
    for (const char of text) {
        if (result[char] !== undefined) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }

    return result;
};

export default countCharacters;
