/**
 * Returns the middle character from a string.
 *  It returns the middle 2 characters if the string has an even length.
 *
 * @param {string} [text=''] - Find the middle character(s) of this string.
 * @returns {string} The middle character(s) in the text.
 */

const middleCharacter = (text = '') => {
    const mid = Math.floor(text.length / 2);

    if (text.length === 0) return '';

    return text.length % 2 === 0
        ? text.slice(mid - 1, mid + 1)
        : text.charAt(mid);
};

export default middleCharacter;
