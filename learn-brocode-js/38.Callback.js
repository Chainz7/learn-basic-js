// Callback = a function passed as an argument to another function
/* 
    Ensures that a function is not going to run before a task 
    is completed. Helps us develop asynchronus code.
    (when one function has to wait for another function)
    that helps us avoid errors and potential problem
    Ex. Wait for a file to load
*/
// 1st
let total = sum(2, 3);
displayConsole(total);
displayDOM(total);

function sum(x, y) {
    let result = x + y;
    return result
}
function displayConsole(output) {
    console.log(output);
}
function displayDOM(output) {
    document.getElementById("myLabel").innerHTML = output;
}
// 2nd
sum2(5, 4, displayConsole2);
sum2(5, 4, displayDOM2);

function sum2(x, y, callBack) {
    let result2 = x + y;
    callBack(result2);
}
function displayConsole2(output2) {
    console.log(output2);
}
function displayDOM2(output2) {
    document.getElementById("myLabel2").innerHTML = output2;
}
