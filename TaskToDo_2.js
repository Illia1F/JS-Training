/**TASK
 * 
 * Write a arrow function that has a similar behavior.
 */

const arr = [1, 2, 3, 4, 5, 6];

const getSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const getSumV2 = arr => arr.reduce((total, el) => total + el, 0);
