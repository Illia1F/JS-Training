/**Rest Operator
 * 
 * The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
 * Rest parameter is added in ES2015 or ES6 which improved the ability to handle parameter.
 */

function fun1(...params) {
  console.log(params);
}

function fun2(param1, param2, ...restParams) {
  console.log(param1, param2, restParams);
}

fun1('fun1: ', 1, 2, 3);

fun2('fun2: ', 1, 2, 3, 4, 5);