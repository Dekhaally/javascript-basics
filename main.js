// main.js

// 1. Create variables of different data types

// String
const myString = "Hello, world!";

// Number
const myNumber = 42;

// Boolean
const myBoolean = true;

// Null
const myNull = null;

// Undefined
let myUndefined;

// Object
const myObject = {
    name: "Alice",
    age: 30,
    isStudent: false
};

// Symbol
const mySymbol = Symbol("unique");

// 2. Print these variables to the console using console.log()
console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Null:", myNull);
console.log("Undefined:", myUndefined);
console.log("Object:", myObject);
console.log("Symbol:", mySymbol);
// main.js

// 1. Create an array of numbers
const numbers = [5, 8, 12, 20, 25, 30];
// 2. Use the map method to create a new array where each number is multiplied by 2
const doubledNumbers = numbers.map(number => number * 2);
console.log("Doubled Numbers:", doubledNumbers);
// 3. Use the filter method to create a new array that only includes numbers greater than 10
const numbersGreaterThanTen = numbers.filter(number => number > 10);
console.log("Numbers Greater Than 10:", numbersGreaterThanTen);
// 4. Use the reduce method to find the sum of all numbers in the array
const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of Numbers:", sumOfNumbers);
// 5. Use the forEach method to print each number in the array to the console
console.log("All Numbers:");
numbers.forEach(number => console.log(number));


