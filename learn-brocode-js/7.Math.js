let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

//x = Math.round(x);         // bulatan terdekat, 3.14 = 3
//x = Math.floor(x);         // bulatan rendah, 3.70 = 3
//x = Math.ceil(x);          // bulatan atas, 3.14 = 4
//x = Math.pow(x, 3);        // 3.14 x 3.14 x 3.14
//x = Math.sqrt(x);          // akar dari 3.14 [akar dari 25 = 5x5]
//x = Math.abs(x);           // negatif to positive only
maximum = Math.max(x, y, z); // nilai tertinggi dalam variable didalam
minimum = Math.min(x, y, z); // nilai terendah

console.log(x);
console.log(maximum);
console.log(minimum);
