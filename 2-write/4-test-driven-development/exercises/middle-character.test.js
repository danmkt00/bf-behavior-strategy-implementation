import middleCharacter from './middle-character.js';

describe('middleCharacter', () => {
    test('returns middle character for odd-length strings', () => {
        expect(middleCharacter('abc')).toBe('b');
        expect(middleCharacter('hello')).toBe('l');
        expect(middleCharacter('a')).toBe('a');
    });

    test('returns middle two characters for even-length strings', () => {
        expect(middleCharacter('abcd')).toBe('bc');
        expect(middleCharacter('test')).toBe('es');
        expect(middleCharacter('ab')).toBe('ab');
    });

    test('returns empty string when input is empty', () => {
        expect(middleCharacter('')).toBe('');
    });

    test('handles special characters and whitespace', () => {
        expect(middleCharacter('a b')).toBe(' ');
        expect(middleCharacter('!@#$')).toBe('@#');
    });

    test('works with long strings', () => {
        expect(middleCharacter('abcdefghij')).toBe('ef');
        expect(middleCharacter('abcdefghijk')).toBe('f');
    });
});
