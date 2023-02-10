/* 
   Operands (values, variables, etc.)
   Operators (+ - * / %)
*/

let students = 20;
// 1st
students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
let extraStudents = students % 3; // Setelah dibagi 3 sisa berapa angkanya
// 2nd
students += 1; 
// students -= 1; 
// students *= 2; 
// students /= 2; 
console.log(students);
console.log(extraStudents);
/* 
   operator precedence
   1. parenthesis ()
   2. exponents
   3. multiplication & division
   4. addition & subtraction
*/
let result = 1 + 2 * (3 + 4);
console.log(result);