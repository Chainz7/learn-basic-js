//array.reduce() = reduces an array to a single value
//menggabungkan multiple elemen dalam array jadi 1 array

let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkOut);

console.log(`The Total is: $${total}`);

function checkOut(total, element) {
    return total + element; //create a SUM
}