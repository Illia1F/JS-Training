
/**Array Methods that are frequently used.
 * 
 * find()
 * map()
 * filter()
 * reduce()
 */
const arr = [1, 2, 3, 4, 5];

// Simple loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/**ForEach loop
 * Index and Array are optional parameters.
 */
arr.forEach((el, index, array) => {
  console.log(el, index, array);
});

arr.forEach((el) => console.log(el));

// find an element in the array.
const foundEl = arr.find(el => el == 1);
console.log(foundEl);

// creates a new array from calling a function for every array element.
const arr2 = arr.map((el) => el * el);

arr2.forEach((el) => console.log(el));

// creates a new array filled with elements that pass a test provided by a function.
const arr3 = arr.filter((el) => el % 2 === 0);
console.log(arr3)

// reduce() method returns a single value: the function's accumulated result.
// Add all numbers in an array.
const sum = arr.reduce((total, num) => total + num);
console.log(sum)
