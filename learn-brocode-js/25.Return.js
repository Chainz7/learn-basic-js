// return = returns a value back to the place

let area;
let width;
let height;

width = window.prompt("Enter Width");
height = window.prompt("Enter Height");

area = getArea(width, height); //ini ke 2

console.log("The Area is:", area);

function getArea(width, height) { //Progam ini berjalan dulu
    let result = width * height;
    return result; //hasil perkalian dikirim ke area
}