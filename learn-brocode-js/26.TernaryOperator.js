/*
    Shortcut for an if else statemen takes 3 operands
    1. a condition with    ?
    2. expression if True  :
    3. expression if False 
    condition ? exprIfTrue : exprIfFalse
*/
// 1. Normal
let adult = checkAge(21);
console.log(adult);
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
// 2. 1 Line Code
console.log(adult);
function checkAge(age) {
    return age > 18 ? true : false;
}
// 3. 1 Line Code Game
checkWinner(true);
function checkWinner(win) {
    win ? console.log("YOU WIN!") : console.log("YOU LOSE");
}