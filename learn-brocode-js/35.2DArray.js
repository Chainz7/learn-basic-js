//2D Array = an array of arrays
let fruits = ["Apple", "Orange", "Banana"];
let vegetables = ["Carrot", "Onion", "Potato"];
let meats = ["Chicken", "Fish", "Egg"];

let groceryList = [fruits, vegetables, meats];

groceryList[1][0] = "Wortel"; //Mengganti isi array

for (let list of groceryList) {
    //console.log(list); //Menampilkan 3 Array dan isinya
    for (let food of list) {
        console.log(food); //Menampilkan Isi dari 3 Array di atas
    }
}