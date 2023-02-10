// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let name = "Anya"; // String
let age = 10; // Number
let student = true; // Boolean

age = age + 1; // Number Data Type

// Show in console
console.log("Forger", name);
console.log("My Age is", age);
console.log("Enrolled", student);

// Show to the web
document.getElementById("p1").innerHTML = "Hello" + name;
document.getElementById("p2").innerHTML = "Ur Age" + age + "Years Old";
document.getElementById("p3").innerHTML = "Enrolled" + student;