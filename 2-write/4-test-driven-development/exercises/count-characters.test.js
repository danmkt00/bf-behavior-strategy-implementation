import countCharacters from './count-characters.js';

describe('countCharacters', () => {
    test('counts characters in a normal string', () => {
        expect(countCharacters('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    });

    test('returns an empty object for an empty string', () => {
        expect(countCharacters('')).toEqual({});
    });

    test('counts repeated characters', () => {
        expect(countCharacters('aaa')).toEqual({ a: 3 });
    });

    test('handles spaces and punctuation', () => {
        expect(countCharacters('a b!')).toEqual({ a: 1, ' ': 1, b: 1, '!': 1 });
    });

    test('is case sensitive', () => {
        expect(countCharacters('Aa')).toEqual({ A: 1, a: 1 });
    });

    test('counts numeric characters', () => {
        expect(countCharacters('123321')).toEqual({ 1: 2, 2: 2, 3: 2 });
    });
});
