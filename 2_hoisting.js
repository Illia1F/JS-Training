/* JavaScript Hoisting
 *
 * In JavaScript, a variable can be declared after it has been used.
 * Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
 */

console.log(foo); // CORRECT (foo is undefined)
var foo = 100; // DECLARATION

fun1();
function fun1() {
  console.log('fun1');
}

/* The LET and CONST Keywords
 * 
 * Variables defined with let and const are hoisted to the top of the block, but not initialized.
 * The block of code is aware of the variable, but it cannot be used until it has been declared.
 * Using a let variable before it is declared will result in a ReferenceError.
 * The variable is in a "temporal dead zone" from the start of the block until it is declared:
 */

console.log(bar); // ReferenceError
let bar = 200;

fun2(); // ReferenceError
const fun2 = function () 
{
  console.log("fun2");
}
