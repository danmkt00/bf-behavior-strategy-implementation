// #todo

// you can use this to check the argument
import isArrayOfNumbers from './utils/is-array-of-numbers.js';

/**
 * Sums all the numbers in an array of numbers
 * @param {*} numbers
 * @returns
 */
export const sumNumbers = (numbers = []) => {
    if (numbers.length === 0) return 0;
    if (!isArrayOfNumbers(numbers)) {
      throw new TypeError('');
    }

    return numbers.reduce((acc, num) => acc + num);

};
