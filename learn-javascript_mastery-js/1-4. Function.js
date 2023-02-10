// A BLOCK OF CODE => PERFORMS A TASK

// A FUNCTION DECLARATION (defining a function)
function square(number) {
    return number * number;
}

// A FUNCTION CALL (invoking / executing a function)
const result = square(5);
/*
    console.log(result);
*/

// FUNCTION RUMUS
// A function declaration
function name(params) {
    // statements
    // have access to "this" keyword
}

// A function expression
const name2 = function(params) {
    // statements
}

// A arrow function
const name3 = (params) => {
    // statements
}
name3();

// FUNCTION EXAMPLE
function sayHi(name) {
    console.log(`Hi, ${name}`);
}
/*
    sayHi('Joe');
    sayHi('Jane');
*/

// Returns undefined
function add(a, b) {
    return "RETURNED";
    return a + b;
}

const sum = add(2, 3);
/*
    console.log(sum);
*/
function test() {
    //console.log(1);
    return true;
    console.log(2);
    return false;
    console.log(3);
}

const bool = test();
/*
    console.log(bool);
*/

// Arrow Function { 99% USEFULL }
const square2 = (number, number2) => {
    return number * number2;
}

const result2 = square2(2, 5);
/*
    console.log(result2);
*/

const square3 = (number) => number * number;

const result3 = square3(2);
/*
    console.log(result3);
*/

