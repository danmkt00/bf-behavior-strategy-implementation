import reverseWords from './reverse-words.js';

describe('reverseWords', () => {
    test('reverses each word in the string', () => {
        expect(reverseWords('hello world')).toBe('olleh dlrow');
        expect(reverseWords('abc def ghi')).toBe('cba fed ihg');
    });

    test('returns empty string for empty input', () => {
        expect(reverseWords('')).toBe('');
    });

    test('handles a single word', () => {
        expect(reverseWords('hello')).toBe('olleh');
    });

    test('handles multiple spaces between words', () => {
        expect(reverseWords('  hello   world  ')).toBe('  olleh   dlrow  ');
    });

    test('handles strings with punctuation', () => {
        expect(reverseWords('hello, world!')).toBe(',olleh !dlrow');
    });

    test('works with mixed case', () => {
        expect(reverseWords('HeLLo WoRLd')).toBe('oLLeH dLRoW');
    });
});
