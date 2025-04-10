// #todo

// you can use this to check the argument
import isArrayOfNumbers from './utils/is-array-of-numbers.js';

/**
 * Returns the number of even numbers in an array of numbers
 * @param {*} numbers
 * @returns
 */
export const numberOfEvens = (numbers = []) => {
    let evenNumbers = 0;

    if (numbers.length === 0) return evenNumbers;
    if (!isArrayOfNumbers(numbers)) {
      throw new TypeError('');
    }
  
    numbers.forEach((num) => {
      if (num % 2 === 0) {
        evenNumbers++;
      }
    });
  
    return evenNumbers;
};
