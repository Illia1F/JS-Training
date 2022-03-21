// Reference types
const arr = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

console.log('arr: ' + arr);
console.log('arr2: ' + arr2);

if (arr === arr2) { // FALSE
  console.log('Arrays equals.');
}
else {
  console.log('Arrays dosnt equal.');
}

console.log('Check each element of arrays');

function areArrayEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

console.log('areArrayEquals([1,2,3], [1,2,3]): ', areArrayEquals([1,2,3], [1,2,3]));

console.log('areArrayEquals([1,2,3], [1,2,3,4])', areArrayEquals([1,2,3], [1,2,3,4]));

console.log('areArrayEquals([1,2,3], [3,1,2])', areArrayEquals([1,2,3], [3,1,2]));