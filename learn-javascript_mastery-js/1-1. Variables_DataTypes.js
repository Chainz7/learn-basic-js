// VARIABLE NAMING ===============================
/*
    1. The name should be unique
    2. The name should not be any reserved
    3. The name must start with a character, _, $
*/
var variableVar = 'test';
let variableLet = 'test';
const variableConst = 'test';
/*
    console.log(variableName);
*/

// String ===============================
const singleQuotes = 'Hello';
const doubleQuotes = "Hello!!";
const name = 'Jane';
const backticks = `Hello ${name}, Welcome!`;
const backticksMath = `2 + 2 = ${2 + 2}`;
/*
    console.log(backticks); 
    console.log(backticksMath); 
    console.log(typeof backticks); 
    console.log(typeof backticksMath); 
*/

// Numbers ===============================
const wholeNumber = 5;
const decimalNumber = 0.5;
const firstNumber = 5;
const secondNumber = 10;

const resultPlus = firstNumber + secondNumber;
const resultMines = firstNumber - secondNumber;
const resultMultiplication = firstNumber * secondNumber;
const resultDivided = firstNumber / secondNumber;
/*
    console.log(wholeNumber);
    console.log(decimalNumber);
    console.log(resultPlus);
    console.log(resultMines);
    console.log(resultMultiplication);
    console.log(resultDivided);
    console.log(typeof resultDivided);
*/

// Booleans ===============================
/*
    1. True = Yes, Correct, 1
    2. False = No, Incorrect, 0
*/
const isCool = true; //false
const age = 20;
/*
    if(isCool) {
        console.log("Hi man, you're cool")
    } else {
        console.log('Oh, hi...')
    }
    console.log(isCool);
    console.log(age > 30);
    console.log(typeof isCool);
*/

// Null ===============================
let test = null; //assignt empty variable
test = "Hay";
/*
    console.log(test);
    console.log(typeof test);
*/

// Undefined ===============================
let x; //check the variable has assignt
/*
    console.log(x)
    console.log(typeof x)
*/

// Objects ===============================
const person = {
    name2: 'John',
    age2: 25,
};
// Dot notation
/*
    console.log(person);
    console.log(person.name2);
    console.log(typeof person);
    console.log(typeof person.name2);
*/
// Array 
const arr = [1, 2, 3, 4];
/*
    console.log(arr);
    console.log(typeof arr);
*/
// Date
const date = new Date();
/*
    console.log(date);
    console.log(typeof date);
*/

// Statically Typed ===============================
let message = 'Hello, World';
/*
    console.log(message);
    console.log(typeof message);
*/
// Dynamically Typed ===============================
message = true;
/*
    console.log( message);
    console.log(typeof message);
*/