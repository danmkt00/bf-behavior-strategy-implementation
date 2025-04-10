// you can use this to check the argument
import isArrayOfNumbers from './utils/is-array-of-numbers.js';

/**
 * Returns the smallest number in an array of numbers
 * @param {*} numbers
 * @returns
 */
export const findSmallestNumber = (numbers = []) => {
  if (numbers.length === 0) return undefined;
  if (!isArrayOfNumbers(numbers)) {
    throw new TypeError('');
  }

  let greatestNum = numbers[0];
  numbers.forEach((num) => {
    if (greatestNum > num) {
      greatestNum = num;
    }
  });

  return greatestNum;
};
