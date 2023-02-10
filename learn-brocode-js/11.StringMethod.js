// String Properties & Methods
let nameA  = "Agility Power";
let nameB  = "   Bro Code  ";
let number = "081-395-123-212";
// Penulisan Tanpa Merubah Nilai Variable
console.log(nameA.length);                // Jumlah char 
console.log(nameA.charAt(2));             // Mencari char dimulai di (?);
console.log(nameA.indexOf("i"));          // Mencari char i paling awal
console.log(nameA.lastIndexOf("i"));      // Mencari char i paling belakang
console.log(nameA.toUpperCase());         // Uppercase
console.log(nameA.toLowerCase());         // Lowercase
console.log(nameB.trim());                // menghapus spasi yang berlebihan
console.log(number.replaceAll("-", "/")); // mengganti huruf "-" -> "/" / bisa dikosongi "-" -> ""
// Penulisan Dengan Merubah Nilai Variable
nameA = nameA.toUpperCase();
console.log(nameA);
