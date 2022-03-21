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
