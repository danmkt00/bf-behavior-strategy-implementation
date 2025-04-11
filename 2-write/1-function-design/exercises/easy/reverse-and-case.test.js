// #todo

'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
  describe(
    solution.name + ': reverses a string then sets to lower or upper case',
    () => {
      describe("the function's default parameters", () => {
        it('second parameter defaults to true', () => {
          expect(solution('asdf')).toEqual('fdsa');
        });
        it('first parameter defaults to an empty string', () => {
          expect(solution()).toEqual('');
        });
      });
      // write the tests indicated by the comments
      describe('when set to lower case', () => {
        // when the text is an empty string
        it(`'' -> ''`, () => {
          expect(solution('')).toEqual('');
        });
        // when the text is all upper case
        it(`'ABCDE' -> 'edcba'`, () => {
          expect(solution('ABCDE')).toEqual('edcba');
        });
        // when the text is all lower case
        it(`'abcde' -> 'edcba'`, () => {
          expect(solution('abcde')).toEqual('edcba');
        });
        // when the text is mixed upper and lower case
        it(`'aBcDe' -> 'edcba'`, () => {
          expect(solution('aBcDe')).toEqual('edcba');
        });
        // when the text contains punctuation
        it(`'A,B!C-D_E' -> 'e_d-c!b,a'`, () => {
          expect(solution('A,B!C-D_E')).toEqual('e_d-c!b,a');
        });
        // when the text contains numbers
        it(`'Abcde1' -> '1edcba'`, () => {
          expect(solution('Abcde1')).toEqual('1edcba');
        });
      });
      describe('when set to upper case', () => {
        // when the text is an empty string
        it(`'' -> ''`, () => {
          expect(solution('', false)).toEqual('');
        });
        // when the text is all upper case
        it(`'ABCDE' -> 'EDCBA'`, () => {
          expect(solution('ABCDE', false)).toEqual('EDCBA');
        });
        // when the text is all lower case
        it(`'abcde' -> 'EDCBA'`, () => {
          expect(solution('abcde', false)).toEqual('EDCBA');
        });
        // when the text is mixed upper and lower case
        it(`'aBcDe' -> 'EDCBA'`, () => {
          expect(solution('aBcDe', false)).toEqual('EDCBA');
        });
        // when the text contains punctuation
        it(`'A,B!C-D_E' -> 'E_D-C!B,A'`, () => {
          expect(solution('A,B!C-D_E', false)).toEqual('E_D-C!B,A');
        });
        // when the text contains numbers
        it(`'Abcde1' -> '1EDCBA'`, () => {
          expect(solution('Abcde1', false)).toEqual('1EDCBA');
        });
      });
    },
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
