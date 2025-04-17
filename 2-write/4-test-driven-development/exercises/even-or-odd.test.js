import evenOrOdd from './even-or-odd.js';

describe('evenOrOdd', () => {
    test('returns "even" for even numbers and "odd" for odd numbers', () => {
        expect(evenOrOdd([1, 2, 3, 4])).toEqual(['odd', 'even', 'odd', 'even']);
    });

    test('handles an empty array', () => {
        expect(evenOrOdd([])).toEqual([]);
    });

    test('handles a single even number', () => {
        expect(evenOrOdd([2])).toEqual(['even']);
    });

    test('handles a single odd number', () => {
        expect(evenOrOdd([3])).toEqual(['odd']);
    });

    test('handles negative numbers', () => {
        expect(evenOrOdd([-1, -2, -3, -4])).toEqual([
            'odd',
            'even',
            'odd',
            'even',
        ]);
    });

    test('returns "even" for zero', () => {
        expect(evenOrOdd([0])).toEqual(['even']);
    });

    test('handles a mix of positive and negative numbers', () => {
        expect(evenOrOdd([1, -2, 3, -4])).toEqual([
            'odd',
            'even',
            'odd',
            'even',
        ]);
    });

    test('handles an array of only even numbers', () => {
        expect(evenOrOdd([2, 4, 6, 8])).toEqual([
            'even',
            'even',
            'even',
            'even',
        ]);
    });

    test('handles an array of only odd numbers', () => {
        expect(evenOrOdd([1, 3, 5, 7])).toEqual(['odd', 'odd', 'odd', 'odd']);
    });
});
