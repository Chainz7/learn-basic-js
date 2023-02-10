// Comparison Operators +> true/false ===========
const a = 5;
const b = 10;
/*
    // Greater than
    console.log(a > b);
    // Greater than or equal to
    console.log(a >= b);
    // Less than
    console.log(a < b);
    // Less than or equal to
    console.log(a <= b);

    // Is equal
    console.log(a == b);
    // Not equal
    console.log(a != b);

    // Strict Equality
    console.log(a === b);
    // Strict Inequality
    console.log(a !== b);
*/
// Strict Equality
// Compares VALUES and DATA TYPES
// return true only if both are the same
/* 
    console.log(5 === "5");
*/

// Loose Equality
// Doesn't compare DATA TYPES
/* 
    console.log(5 == "5");
*/

// The Good Ones: === !==
/* 
    console.log(true === 1); //false
    console.log("5" === 5); //false
*/
// The Evil Twins: == !=
/* 
    console.log('' == '0'); //false
    console.log(0 == ''); //true
    console.log(0 == '0'); //true
    console.log(false == 'false'); //false
    console.log(false == '0'); //true
    
    console.log(true == 1); //true
    console.log("5" == 5); //true
*/

// Logical Operators ===========
// AND && => ALL OPERANDS ARE TRUE => TRUE
/* 
    console.log(true && false);
    console.log(true && true);
    console.log(true && true && false);
*/
// OR || => AT LEAST ONE OPERAND IS TRUE => TRUE
/* 
    console.log(true || false);
*/
// NOT !
/* 
    console.log(!true);
    console.log(!false);
*/