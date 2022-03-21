
/**Higher Orders Functions
 * 
 * Higher Orders Functions are functions that perform operations on other functions.
 */
setTimeout(() => {
  console.log('Lorem ipsum');
}, 5000);

const foo = (a, b, callback) => {
  const result = a + b;
  return callback(result);
};

foo(5, 15, (value) => {
  return value;
});

console.log(foo(400, 500, (value) => value * value));
