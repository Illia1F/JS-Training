console.log('Concat arrays: arr, arr2.');

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr, ...arr2];

console.log('arr: ' + arr);
console.log('arr2: ' + arr2);
console.log('Concat Array: ' + newArr);

console.log("Create an object with additional members.");

const obj = {
  a: 10,
};

const newObj = {
  ...obj,
  b: 20,
};

console.log("Object: ", obj);
console.log("Object with additional members: ", newObj);