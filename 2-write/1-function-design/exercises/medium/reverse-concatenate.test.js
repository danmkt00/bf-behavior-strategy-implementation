// #todo

'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings
 * it does not modify the original array
 * @param {string[]} arrayOfStrings - an array of strings to concatenate, in reverse order
 * @returns {string} - the array elements joined together, in reverse order
 */

// -------- your solutions --------

const reverseAndConcate = (arrayOfStrings) =>
    [...arrayOfStrings].reverse().join('');

for (const solution of [secretSolution, reverseAndConcate]) {
    describe(`${solution.name}: joins reversed strings`, () => {
        it('returns the single string when array has one element', () => {
            const input = ['text'];
            const result = solution(input);
            expect(result).toBe('text');
        });

        it('joins two elements in reverse order', () => {
            const input = ['text', 'one'];
            const result = solution(input);
            expect(result).toBe('onetext');
        });

        it('joins multiple elements in reverse order', () => {
            const input = ['t', 'x', 'e', 't'];
            const result = solution(input);
            expect(result).toBe('text');
        });

        it('handles strings with spaces and special characters', () => {
            const input = ['space ', 'exclamation!', '@at'];
            const result = solution(input);
            expect(result).toBe('@atexclamation!space ');
        });

        it('does not mutate the original array', () => {
            const input = ['x', 'y', 'z'];
            const copy = [...input];
            solution(input);
            expect(input).toEqual(copy);
        });
        it('returns an empty string when given an empty array', () => {
            const input = [];
            const result = solution(input);
            expect(result).toBe('');
        });
    });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings does not contain only strings"); } return [...a].reverse().reduce((a, b) => a + b, "") }
