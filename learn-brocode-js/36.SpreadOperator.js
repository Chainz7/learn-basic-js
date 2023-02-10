/*
    Spread Operator = Allow an iterable such as an array or string
                      to be expanded in places where zero or more
                      arguments are expected 
                      !-(unpacks the elements)-!
*/
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);    //didalam array
console.log(...numbers); //keluar array [unpacked element]
let userName = ["Bro Code"];
console.log(userName);    //didalam array
console.log(...userName); //keluar array [unpacked element]

let numbers2 = [1, 3, 5, 7, 9];
//maximum = Math.max(numbers2);  //hasilnya akan NaN, karena angka didalam array tidak keluar
maximum = Math.max(...numbers2); //angka didalam array keluar
console.log(maximum); //angka 9 adalah yang tertinggi

let class1 = ["rafi", "spongebob"];
let class2 = ["risa", "patrik"];
//class1.push(class2);  //menambahkan array 3, karena tidak di [unpacked]
class1.push(...class2); //menambahkan isi dari array 3 karena di [unpacked]
console.log(class1);    //hasilnya didalam array
console.log(...class1); //hasilnya keluar dari array
