/**Destructuring
 * 
 * The destructuring assignment helps to unpack objects or arrays into a group of variables.
 */
const arr = [1, 2, 3];

// 1
const el1 = arr[0];
const el2 = arr[1];
const el3 = arr[2];
console.log(el1, el2, el3);

//2
const [n1, n2, n3] = arr;
console.log(n1, n2, n3);

// Object Destructuring
const foo = { 
    b: 10, 
    c: 20, 
    d: 50
};

const val1 = foo.b;
const val3 = foo.d;

//1
const { b, c: val_c, d } = foo;
console.log(b, val_c, d);

//new object with the Destructuring assignment
const { c, ...rest } = foo;
console.log(rest);
