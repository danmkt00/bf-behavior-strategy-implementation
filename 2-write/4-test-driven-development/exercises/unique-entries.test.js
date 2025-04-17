import uniqueEntries from './unique-entries.js';

describe('uniqueEntries', () => {
    test('removes duplicates and sorts in ascending order by default', () => {
        expect(uniqueEntries([3, 1, 3, 2])).toEqual([1, 2, 3]);
        expect(uniqueEntries([5, 5, 5, 1, 1, 4])).toEqual([1, 4, 5]);
    });

    test('sorts in descending order when `up` is false', () => {
        expect(uniqueEntries([3, 1, 3, 2], false)).toEqual([3, 2, 1]);
        expect(uniqueEntries([5, 5, 5, 1, 1, 4], false)).toEqual([5, 4, 1]);
    });

    test('handles an empty array', () => {
        expect(uniqueEntries([])).toEqual([]);
    });

    test('handles an array with all duplicate numbers', () => {
        expect(uniqueEntries([1, 1, 1, 1, 1])).toEqual([1]);
    });

    test('handles arrays with only one unique number', () => {
        expect(uniqueEntries([1])).toEqual([1]);
    });

    test('handles negative numbers correctly', () => {
        expect(uniqueEntries([-3, -1, -3, -2], true)).toEqual([-3, -2, -1]);
        expect(uniqueEntries([-3, -1, -3, -2], false)).toEqual([-1, -2, -3]);
    });
});
