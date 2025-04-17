// #todo

'use strict';

/**
 * takes an array of strings and returns a new array of numbers
 *  the new array contains all the numbery strings, cast to numbers
 * does not modify the argument (no side-effects)
 * @param {string[]} arrayOfStrings - the array of strings
 * @returns {number[]} an array containing only numbers, and not NaN
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */

// -------- your solutions --------

const numberify = (arrayOfStrings) =>
    arrayOfStrings
        .map(Number) // Convert all to numbers
        .filter((n) => !isNaN(n)); // Keep only real numbers

for (const solution of [secretSolution, numberify]) {
    describe(solution.name + ': returns a new array of numbers', () => {
        describe('when it contains NaN', () => {
            it('["a", "b", "1", "2"] -> [1, 2]', () => {
                expect(solution(['a', 'b', '1', '2'])).toEqual([1, 2]);
            });
            it('array that contains a nagative number string', () => {
                expect(solution(['-2', '1', '0'])).toEqual([-2, 1, 0]);
            });
            it('array with just one number string', () => {
                expect(solution(['10'])).toEqual([10]);
            });
            it('array with  repeated number string', () => {
                expect(
                    solution(['-1', '2', '3', '-1', '2', '3', 'text']),
                ).toEqual([-1, 2, 3, -1, 2, 3]);
            });
            it('array with a big number string', () => {
                expect(solution(['999999999999'])).toEqual([999999999999]);
            });
        });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings contains non-strings"); } const c = a.map(a => +a), d = c.filter(a => !Number.isNaN(a)); return d }
