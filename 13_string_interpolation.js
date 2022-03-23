
/**
 * String Interpolation
 */
const result = 100;

console.log('Result equals to ' + result + '.');
console.log(`Result equals to ${result}.`);

const foo = (a, b) => a + b;

const number1 = 50;
const number2 = 50;

const text3 = `Result equals to ${number1} and ${number2} and ${foo(number1,number)}.`;
