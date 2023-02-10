/*
    Function without a name 
    Avoid polluting the global scope withnames 
    Write it, then forget about it    
*/
// Example Console
// 1. First
sayHello();
function sayHello() {
    console.log("Hello!");
}
// 2. Second
const greeting = function () {
    console.log("Hello!");
}
greeting();

// HTML
let count = 0;

// 1. First (Tambahkan "onclick = increaseCount()" di html) & decrease
/* function increaseCount() {
    count += 1;
    document.getElementById("myLabel").innerHTML = count;
}
function decreaseCount() {
    count -= 1;
    document.getElementById("myLabel").innerHTML = count;
}*/

// 2. Second
document.getElementById("increaseButton").onclick = function () {
    count += 1;
    document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("decreaseButton").onclick = function () {
    count -= 1;
    document.getElementById("myLabel").innerHTML = count;
}