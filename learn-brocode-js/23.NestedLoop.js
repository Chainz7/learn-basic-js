let symbol = window.prompt('Enter Symbol to use');
let rows = window.prompt('Enter Number of Rows');
let columns = window.prompt('Enter Number of columns');

for (let i = 1; i <= rows; i += 1) { // diulang ke bawah 2x
    for (let j = 1; j <= columns; j += 1) {
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}