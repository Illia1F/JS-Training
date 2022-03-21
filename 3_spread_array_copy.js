
/* Spread Copy
 * 
 * Spread operator allows an iterable to expand in places where 0+ arguments are expected. 
 * It is mostly used in the variable array where there is more than 1 values are expected. 
 * It allows us the privilege to obtain a list of parameters from an array.
 */

let arr = [1,2,3];
let copyOfArr = [...arr]; // It makes a copy
let referenceCopyOfArr = arr; // It doesnt copy the table, but assigns a reference of the table.
let arrConcat = [...arr, 4, 5, 6]; // It makes a Concat of an copy of arr and [4, 5, 6]

console.log('arr: ' + arr); // [ 1, 2, 3 ]
console.log('copyOfArr: ' + copyOfArr); // [ 1, 2, 3 ]
console.log('referenceCopyOfArr: ' + referenceCopyOfArr); // [ 1, 2, 3 ]
console.log('arrConcat: ' + arrConcat); // [ 1, 2, 3, 4, 5, 6 ]