// #todo

'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */

// -------- your solutions --------

for (const solution of [secretSolution]) {
  describe(solution.name + ': sets a text to lower or upper case', () => {
    describe("the function's default parameters", () => {
      it('second parameter defaults to true', () => {
        expect(solution('asdf')).toEqual('asdf');
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
      it(`'ABC' -> 'ABC'`, () => {
        expect(solution('ABC')).toEqual('abc');
      });
      // when the text is all lower case
      it(`'abc' -> 'ABC'`, () => {
        expect(solution('abc')).toEqual('abc');
      });
      // when the text is mixed upper and lower case
      it(`'AbC' -> 'abc'`, () => {
        expect(solution('AbC')).toEqual('abc');
      });
      // when the text contains punctuation
      it(`'A,B,C' -> 'a,b,c'`, () => {
        expect(solution('A,B,C')).toEqual('a,b,c');
      });
      // when the text contains numbers
      it(`'ABC1' -> 'abc1'`, () => {
        expect(solution('ABC1')).toEqual('abc1');
      });
    });
    describe('when set to upper case', () => {
      // when the text is an empty string
      it(`'' -> ''`, () => {
        expect(solution('', false)).toEqual('');
      });
      // when the text is all upper case
      it(`'ABC' -> 'ABC'`, () => {
        expect(solution('ABC', false)).toEqual('ABC');
      });
      // when the text is all lower case
      it(`'abc' -> 'ABC'`, () => {
        expect(solution('abc', false)).toEqual('ABC');
      });
      // when the text is mixed upper and lower case
      it(`'aBc' -> 'ABC'`, () => {
        expect(solution('aBc', false)).toEqual('ABC');
      });
      // when the text contains punctuation
      it(`'abc!' -> 'ABC!'`, () => {
        expect(solution('abc!', false)).toEqual('ABC!');
      });
      // when the text contains numbers
      it(`'abc1' -> 'ABC1'`, () => {
        expect(solution('abc1', false)).toEqual('ABC1');
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
