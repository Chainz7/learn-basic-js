/* 
    Method Chaining = calling one method after another in one
                      continouos line of code
*/

let userName = "chainz";
// 1st Method
let letter = userName.charAt(0);
letter = letter.toUpperCase();
console.log(letter);
// 2nd Method [Better]
let letter2 = userName.charAt(0).toUpperCase();
console.log(letter2);
// 3rd Method
console.log(userName.charAt(0).toUpperCase());