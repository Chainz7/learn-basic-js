//Function = Defince code once, use it many times

// 1. Example
let userName = "Chainz";
let age = 21;

happyBirthday(); //Memanggil Function

function happyBirthday() {
    console.log("HBD Cuy");
    console.log("Your Age is", age);
    console.log("Hbd", userName);
}
// 2. Example
startProgam(); //Memanggil Function

function startProgam() {
    let userName2 = "Chainz";
    let age2 = 21;
    // Karena varible didalam function maka harus insert 
    happyBirthday2(userName2, age2);
}

function happyBirthday2(a, b) { //var bisa berubah disini
    console.log("HBD YGY");
    console.log("Ummurumu", b);
    console.log("Hbd GeST", a);
}