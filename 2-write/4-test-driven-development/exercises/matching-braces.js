/**
 * Checks if the braces in a string are matched.
 *
 * @param {string} [text=''] - The text of braces to check.
 * @returns {boolean} Whether or not the braces are matched.
 *
 * @example
 *
 * matchingBraces('['); // false
 *
 * @example
 *
 * matchingBraces('()'); // true
 *
 * @example
 *
 * matchingBraces('(]'); // false
 *
 * @example
 *
 * matchingBraces('{[]}'); // true
 *
 * @example
 *
 * matchingBraces('([)]'); // false
 *
 * @example
 *
 * matchingBraces('()[]{}'); // true
 *
 */

const matchingBraces = (text = '') => {
    if (text.length === 1) return false; //handles the problem with one closed brace

    const stack = [];
    const openingBraces = '({[';
    const closingBraces = ')}]';
    for (const char of text) {
        if (openingBraces.includes(char)) {
            stack.push(char);
        } else if (closingBraces.includes(char)) {
            if (char === ')' && stack[stack.length - 1] === '(') {
                stack.pop();
            }
            if (char === '}' && stack[stack.length - 1] === '{') {
                stack.pop();
            }
            if (char === ']' && stack[stack.length - 1] === '[') {
                stack.pop();
            }
        }
    }

    return stack.length === 0;
};

export default matchingBraces;
