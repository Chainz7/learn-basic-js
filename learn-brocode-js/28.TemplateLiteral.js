/*
    Delimited with (`) 
    instead of double or single quotes
    allows embedded variables and expression
*/
let name = "Mei";
let items = "3";
let total = "75";
// 1. Normal
console.log("Hello", name);
console.log("your", items, "items");
console.log("$", total);
// 2. Better
console.log(`Hello ${name}`);
console.log(`your ${items} items`);
console.log(`$${total}`);
// 3. Long Text
let text =
    `Hello ${name} your ${items} items is $${total}`;
console.log(text);