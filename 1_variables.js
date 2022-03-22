// ECMAScript 2009, also known as ES5.
var a = 10;

console.log("a = " + a);

// ECMAScript 2015 is also known as ES6 and ECMAScript 6.
let b = 10;

console.log("b = " + b);

console.log("a === b: " + (a === b));

// Variables defined with const cannot be Redeclared.
// Variables defined with const cannot be Reassigned.
const c = 200;

// Reference Type
const arr = [1, 2, 3];

console.log("const arr = " + arr);

// arr = [1, 2, 4, 5, 6]; - Error

console.log("push 5 to arr");

arr.push(5); // Correct

console.log("const arr = " + arr);

/**Initialize Variables
 * It is a good coding practice to initialize variables when you declare them.
 * Avoid undefined values.
 * Don't Use new Object().
 */
 let str1 = "";             // new primitive string
 let num2 = 0;              // new primitive number
 let bool3 = false;         // new primitive boolean
 const obj4 = {};           // new object
 const arr5 = [];           // new array object
 const reg6 = /()/;         // new regexp object
 const fun7 = function(){}; // new function object
