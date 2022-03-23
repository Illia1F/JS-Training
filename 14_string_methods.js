/**
 * String Methods
 * 
 * slice(startPos, endPos) extracts a part of a string and returns the extracted part in a new string.
 * substring() is similar to slice(). The difference is that substring() cannot accept negative indexes.
 * substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
 * replace() replaces a specified value with another value in a string.
 * toUpperCase() convert to upper case.
 * toLowerCase() convert to lower case.
 * concat() joins two or more strings.
 * trim() removes whitespace from both sides of a string.
 * padStart() pads the current string with a given string so that the resulting string reaches a given length.
 * padEnd() pads the current string with a given string so that the resulting string reaches a given length.
 * charAt() returns the character at a specified index (position) in a string.
 * split() convert a string to an array.
 */

let text = "Apple, Banana, Kiwi";
console.log(text.slice(-12, -6));
console.log(text.slice(7, 13));

text = "Hello World!";
console.log(text.replace("World", "Everyone"));

console.log("HELLO".toLowerCase());
console.log("hello".toUpperCase());

console.log("Hello" + " " + "World!");
console.log("Hello".concat(" ", "World!"));

text = "      Hello World!      ";
console.log(text.trim());

text = "HELLO WORLD";
console.log(text.padStart(text.length * 2, '0'));
console.log(text.padEnd(text.length * 2, '0'));

text = "HELLO WORLD";
console.log(text.charAt(0));
console.log(text[0]);

text = "test test, test1 test1, test2 test2, test3 test3"
console.log(text.split(","));
console.log(text.split(" "));
console.log(text.split(""));