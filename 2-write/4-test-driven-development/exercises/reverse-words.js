/**
 * Reverses each word in a string.
 *
 * @param {string} [text=''] - The string of words to reverse.
 * @returns {string} The text, with each word reversed.
 *
 * @example
 *
 * reverseWords('hello'); // 'olleh'
 *
 * @example
 *
 * reverseWords('hello world!'); // 'olleh dlrow!'
 */
const reverseWords = (text = '') => {
    return text
        .split(' ')
        .map((word) => word.split('').reverse().join('')) // Reverse each word
        .join(' '); // Join the reversed words back into a string
};

export default reverseWords;
