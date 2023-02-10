// 1. Example Huruf
let grade = "A"; //ganti ganti manual nilainya
switch (grade) {
    case "A":
        console.log("Great");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Barely");
        break;
    case "D":
        console.log("Okay");
        break;
    case "F":
        console.log("Bad");
        break;
    default:
        console.log(grade, "is not a letter grade!");
        break;
}
// 2. Example Angka
let grade2 = 60; //ganti ganti manual nilainya
switch (true) {
    case grade2 >= 90:
        console.log("Great");
        break;
    case grade2 >= 80:
        console.log("Good");
        break;
    case grade2 >= 70:
        console.log("Barely");
        break;
    case grade2 >= 60:
        console.log("Okay");
        break;
    case grade2 < 50:
        console.log("Bad");
        break;
    default:
        console.log(grade2, "is not a correct grade!");
        break;
}