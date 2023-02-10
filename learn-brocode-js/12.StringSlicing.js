/*
    Slice(): Extract a section of string and returns
             it as a new string, without changing
             the original string
*/

let fullName = "Bro Code";
let fullName2 = "Bro Code";
let firstName;
let lastName;
// 1st method
firstName = fullName.slice(0, 3); //(0, 3) = 0 awalan, 3 akhiran
lastName = fullName.slice(4);    //(4) = awalan -> habis nama 
console.log(firstName);
console.log(lastName);
// 2nd method [Better]
firstName2 = fullName2.slice(0, fullName2.indexOf(" ")); //(0, fn) = 0 awalan, indexOf(" ") spasi = akhiran
lastName2 = fullName2.slice(fullName2.indexOf(" ")); //(fn) + 1 = fn awalan indexOf(" ") spasi -> sampai akhir
lastName3 = fullName2.slice(fullName2.indexOf(" ") + 1); //(fn) + 1 = fn awalan indexOf(" ") spasi -> sampai akhir, + 1 = menghapus spasi
console.log(firstName2);
console.log(lastName2);
console.log(lastName3);