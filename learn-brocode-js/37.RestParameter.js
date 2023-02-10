/* 
    rest parameter = represents an indefinite number of parameters
                     (packs arguments into an array)
                     ... 
*/

let a = 1;
let b = 2;
let c = 3;

console.log(sum(a, b, c)); //sum hanyalah nama function bukan math

function sum(x,...numbers) { //sum(...numbers) = sum(a, b, c) = 1 + 2 + 3 = 6 //membuat variable numbers keluar array
    let total = 0;           //(x,...numbers) = hasilnya tetap 6 tapi setelah ini selesai, a = 1 tidak ikut masuk ke array numbers tapi ke array x
    for (let number of numbers) { //membuat agar saat dimasukkan angka, tidak masuk ke kata2 array
        total += number;
    }
    return total;
}