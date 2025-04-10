// you can use this to check the argument
import isArrayOfNumbers from './utils/is-array-of-numbers.js';

/**
 * Returns the greatest number in an array of numbers
 * @param {*} numbers
 * @returns
 */
export const findGreatestNumber = (numbers = []) => {
    if (numbers.length === 0) return;
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('');
    }

    let greatestNum = 0;
    numbers.forEach((num) => {
        if (num > greatestNum) {
            greatestNum = num;
        }
    });

    return greatestNum;
};


