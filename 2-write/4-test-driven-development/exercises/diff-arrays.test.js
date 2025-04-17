import diffArrays from './diff-arrays.js';

describe('diffArrays ', () => {
    test('returns difference of two arrays', () => {
        expect(diffArrays([1, 2, 3], [2, 3, 4])).toEqual([1, 4]);
    });

    test('removes duplicates in result', () => {
        expect(diffArrays([1, 1, 2], [2, 3, 3])).toEqual([1, 3]);
    });

    test('returns all items when arrays are disjoint', () => {
        expect(diffArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('returns empty array when arrays are identical', () => {
        expect(diffArrays([1, 2, 3], [1, 2, 3])).toEqual([]);
    });

    test('handles empty arrays', () => {
        expect(diffArrays([], [])).toEqual([]);
    });

    test('is case and type sensitive', () => {
        expect(diffArrays(['1', 2], [1, '2'])).toEqual(['1', 2, 1, '2']);
    });
});
