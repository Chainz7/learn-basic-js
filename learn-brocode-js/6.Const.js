// const: variable that can't be changed

const PI = 3.14
let radius;
let circumference;

radius = window.prompt("Input Radius");
radius = Number(radius);

//PI = 50.2;

circumference = 2 * PI * radius;

console.log("the circumference is", circumference);