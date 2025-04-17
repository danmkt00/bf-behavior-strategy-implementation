// #todo

'use strict';

/**
 * returns true if the value is truthy
 * returns false if the value is falsy
 * @param {any} value
 * @returns {boolean}
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
    /* Execution Paths
      when testing conditionals, you need to be test all paths
  */
    describe(solution.name + ': determines if a value is truthy', () => {
        describe('solution can identify truthy values', () => {
            it('non-empty strings -> true', () => {
                const actual = solution('text');
                expect(secretSolution(actual)).toEqual(true);
            });
            it('numbers that are not 0 or NaN -> true', () => {
                const actual = 10;
                expect(secretSolution(actual)).toEqual(true);
            });
            it('true -> true', () => {
                expect(secretSolution(true)).toEqual(true);
            });
        });
        describe('solution can identify falsy values', () => {
            it('"" -> flase', () => {
                expect(secretSolution('')).toEqual(false);
            });
            it('0 -> false', () => {
                expect(secretSolution(0)).toEqual(false);
            });
            it('NaN -> false', () => {
                expect(secretSolution(NaN)).toEqual(false);
            });
            it('false -> false', () => {
                expect(secretSolution(false)).toEqual(false);
            });
            it('undefined -> false', () => {
                expect(secretSolution(undefined)).toEqual(false);
            });
            it('null -> false', () => {
                expect(secretSolution(null)).toEqual(false);
            });
        });
    });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(value) { return value ? true : false; }
