
// ECMAScript 2015 allows default parameter values in the function declaration
function foo(a = 1, b = 2, c = 3) {
  console.log(a, b, c);
}

foo();
foo(10);
foo(10, 20);
