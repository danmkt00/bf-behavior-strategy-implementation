/**
 * Returns an array containing only the items that are not in both a and b.
 *  This is a pure function with no side-effects.
 *
 * @param {number[]} [a=[]] - One of the two arrays.
 * @param {number[]} [b=[]] - The other array.
 * @returns {number[]} A new array with items not in both a and b.
 *
 * @example
 *
 * diffArrays([2], [1, 3]); // [2, 3]
 *
 * @example
 *
 * diffArrays([2, NaN], [3, 1]); // [NaN, 3]
 *
 * @example
 *
 * diffArrays([2, 1], [3, 2]); // [3]
 * @example
 *
 * diffArrays([1, 2, 3], [4, 5]); // [1, 2, 3, 4, 5]
 */
const diffArrays = (a = [], b = []) => {
    const result = [];
    a.forEach((num) => {
        if (!b.includes(num)) {
            if (!result.includes(num)) {
                result.push(num);
            }
        }
    });

    b.forEach((num) => {
        if (!a.includes(num)) {
            if (!result.includes(num)) {
                result.push(num);
            }
        }
    });

    return result;
};

export default diffArrays;
