// #todo

/**
 * Checks if array contains only numbers
 * @param {*} array
 * @returns {Boolean} isArray
 */

const isArrayOfNumbers = (array = []) => {
    if (array.length === 0) return true;
    return array.every((num) => typeof num === 'number' && !isNaN(num));
};

export default isArrayOfNumbers;
