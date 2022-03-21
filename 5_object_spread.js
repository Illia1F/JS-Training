//Spread Operator for Object Deep Coping
const foo = {
  a: 10,
  b: 100,
  c: 1000,
};

const referenceCopyOfFoo = foo; 

// When you modify the foo also the bar is changed.
foo.a = 1;
foo.d = 1000;

console.log('Foo: ', foo);
console.log('Reference Copy Of The Foo: ', referenceCopyOfFoo);
console.log('foo === referenceCopyOfFoo: ', foo === referenceCopyOfFoo);

// You can create a copy of the foo by Spread Operator.
const copyOfFoo = { ...foo };

console.log('Copy Of The Foo: ', referenceCopyOfFoo);
console.log('foo === copyOfFoo: ', foo === copyOfFoo);

/**
 * ===============================================================
 */
const multiNestingStructure = {
  a: 10,
  b: 20,
  c: {
    a: 100,
    b: 200,
  },
};

console.log('Multiple Nesting Structure: ', multiNestingStructure);

const deepCopy = {
  ...multiNestingStructure,
  c: {
    ...multiNestingStructure.c
  }
};

console.log('Deep Copy: ', deepCopy);

console.log('multiNestingStructure === deepCopy: ', multiNestingStructure === deepCopy);
