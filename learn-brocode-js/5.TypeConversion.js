// Type Conversion: change the datatype of value (string, number, bool)

let age = window.prompt("How Old Are You");
// Sebelum Type Data Diubah
console.log(typeof age); //check type data [string]
age += 1;
console.log(age);
// Mengubah Type Data
age = Number(age); //mengubah type data [string] => [number]
age += 1;
console.log (typeof age); 
console.log(age);

// Contoh Lainnya
let x;
let y;
let z;

x = Number("3.14"); //convert string to number
y = String(3.14); //convert number to string
z = Boolean("");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);