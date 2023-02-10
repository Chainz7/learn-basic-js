let fruits = ["apple", "orange", "banana"];
// Basic
fruits[1] = "coconut";   //Change the element 1
fruits.push("lemon");    //Add an new element
fruits.pop();            //Removes last element
fruits.unshift("mango"); //Add element to beginning
fruits.shift();          //Removes beginnning element
console.log(fruits);     //Show All
console.log(fruits[1]);  //Show Array 1
// Length & Index
let length = fruits.length;           //total element
let index = fruits.indexOf("banana"); //searching the element
console.log(length);     // Show Length
console.log(index);      // Search The Element In Array