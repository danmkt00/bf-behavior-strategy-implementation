import matchingBraces from './matching-braces.js';

describe('matchingBraces', () => {
    test('returns true for correctly paired and nested braces', () => {
        expect(matchingBraces('()')).toBe(true);
        expect(matchingBraces('{}')).toBe(true);
        expect(matchingBraces('[]')).toBe(true);
        expect(matchingBraces('({[]})')).toBe(true);
        expect(matchingBraces('(({}))')).toBe(true);
    });

    test('returns false for unbalanced braces', () => {
        expect(matchingBraces('(')).toBe(false); // Open paren without closing
        expect(matchingBraces(')')).toBe(false); // Close paren without opening
        expect(matchingBraces('{[}]')).toBe(false); // Incorrectly nested braces
        expect(matchingBraces('[{(')).toBe(false); // Missing closing brackets
    });

    test('returns true for an empty string', () => {
        expect(matchingBraces('')).toBe(true); // Empty string should return true (nothing to mismatch)
    });

    test('returns false for mismatched or extra braces', () => {
        expect(matchingBraces('{[}')).toBe(false); // Mismatched brace
        expect(matchingBraces('({[})]')).toBe(false); // Extra closing brace
        expect(matchingBraces('((((')).toBe(false); // Too many opening braces
    });

    test('handles mixed characters and braces', () => {
        expect(matchingBraces('a(b+c){[d*e]}')).toBe(true); // Ignore non-brace characters
        expect(matchingBraces('a(b+c){[d*e]f}g')).toBe(true); // Ignore non-brace characters
    });
});
