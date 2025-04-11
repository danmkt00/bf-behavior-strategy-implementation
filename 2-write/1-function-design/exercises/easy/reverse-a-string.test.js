// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    // write at least 5 more tests ...
    it('a string with all lower case letters', () => {
      expect(solution('asdf')).toEqual('fdsa');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    it('a string with  capital and lower case letters', () => {
      expect(solution('ASDFasdf')).toEqual('fdsaFDSA');
    });
    it('a string with letters and numbers', () => {
      expect(solution('ASDF123')).toEqual('321FDSA');
    });

    it('typeof 123 number -> toReverse is not a string', () => {
      expect(() => {
        solution(123);
      }).toThrow('toReverse is not a string');
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
