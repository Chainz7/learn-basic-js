// Console Example
let x = Math.random(); // Random Number 0 - 1
console.log(x);
x = Math.random() * 6; // Random Number 0 - 5 (array dimulai dari 0)
console.log(x);
x = Math.random() * 6 + 1; // Random Number 0 - 6
console.log(x);
x = Math.floor(Math.random() * 6 + 1); // Random Number 0 - 6 (tanpa .diblekanag angka)
console.log(x);                        // check 7.Math untuk rumus lainnya
// Console 3 Dadu Game
a = Math.floor(Math.random() * 6 + 1);
b = Math.floor(Math.random() * 6 + 1);
c = Math.floor(Math.random() * 6 + 1);
console.log(a);
console.log(b);
console.log(c);
// HTML 3 Dadu Game
document.getElementById("rollButton").onclick = function () {
    a = Math.floor(Math.random() * 6 + 1);
    b = Math.floor(Math.random() * 6 + 1);
    c = Math.floor(Math.random() * 6 + 1);

    document.getElementById("Alabel").innerHTML = "Dadu 1 = " + a;
    document.getElementById("Blabel").innerHTML = "Dadu 2 = " + b;
    document.getElementById("Clabel").innerHTML = "Dadu 3 = " + c;
}