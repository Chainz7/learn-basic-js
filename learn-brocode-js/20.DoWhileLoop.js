// Do Something, then check te condition, repeat if condition is true

let userName = "";

do{
    userName = window.prompt("Enter Your Name");
}while (userName == "" || userName == null) 

console.log("Hello", userName);