import timeInMilliseconds from './time-in-milliseconds.js';

describe('timeInMilliseconds', () => {
    test('converts 0 hours, 0 minutes, 0 seconds to 0 milliseconds', () => {
        expect(timeInMilliseconds(0, 0, 0)).toBe(0);
    });

    test('converts 0 hours, 0 minutes, 1 second to 1000 milliseconds', () => {
        expect(timeInMilliseconds(0, 0, 1)).toBe(1000);
    });

    test('converts 0 hours, 1 minute, 1 second to 61000 milliseconds', () => {
        expect(timeInMilliseconds(0, 1, 1)).toBe(61000);
    });

    test('converts 1 hour, 0 minutes, 0 seconds to 3600000 milliseconds', () => {
        expect(timeInMilliseconds(1, 0, 0)).toBe(3600000);
    });

    test('converts 1 hour, 1 minute, 1 second to 3661000 milliseconds', () => {
        expect(timeInMilliseconds(1, 1, 1)).toBe(3661000);
    });

    test('handles large values', () => {
        expect(timeInMilliseconds(23, 59, 59)).toBe(86399000); // Test the largest possible time: 23 hours, 59 minutes, 59 seconds
    });
});
