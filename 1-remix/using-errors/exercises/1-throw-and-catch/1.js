// #todo

'use strict';

// console.log('- broken JS -');
// try {
//     null();
// } catch (err) {
//     console.error(err);
// }

console.log('- throw new error -');
try {
  // null();
    throw new TypeError('null is not a functionn');
} catch (err) {
    console.error(err);

    // console.assert(err.name === 'TypeError', 'name fail');
    // console.assert(err.message === 'null is not a function', 'message fail');
}
