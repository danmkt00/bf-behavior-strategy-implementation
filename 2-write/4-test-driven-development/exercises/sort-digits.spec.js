import sortDigits from './sort-digits.js';

describe('sortDigits', () => {
    test('sorts digits in ascending order by default', () => {
        expect(sortDigits(4312)).toBe(1234);
        expect(sortDigits(9876)).toBe(6789);
        expect(sortDigits(0)).toBe(0);
        expect(sortDigits(1)).toBe(1);
    });

    test('sorts digits in descending order when `up` is false', () => {
        expect(sortDigits(4312, false)).toBe(4321);
        expect(sortDigits(9876, false)).toBe(9876);
        expect(sortDigits(0, false)).toBe(0);
        expect(sortDigits(1, false)).toBe(1);
    });

    test('handles negative numbers correctly', () => {
        expect(sortDigits(-4312)).toBe(-1234);
        expect(sortDigits(-4312, false)).toBe(-4321);
    });

    test('handles large numbers correctly', () => {
        expect(sortDigits(9876543210)).toBe(123456789);
        expect(sortDigits(9876543210, false)).toBe(9876543210);
    });

    test('handles non-numeric input', () => {
        expect(sortDigits('hello')).toBeNaN();
        expect(sortDigits(NaN)).toBeNaN();
        expect(sortDigits(null)).toBeNaN();
    });
});
