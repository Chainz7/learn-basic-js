// let = variable are limited to block scope {}
// var = variable are limited to function  (){}
// dont use var as global variable can cause a window change

// 1. Let
for (let i = 1; i <= 3; i += 1) {
    //console.log(i);
}
console.log(i); // i not defined cause the i is inside {}
// 2. Var
for (var i = 1; i <= 3; i += 1) {
    //console.log(i);
}
console.log(i); // i is defined
// 3. Var cant escape function
doSomething();
function doSomething() {
    for (var j = 1; j <= 3; j += 1) {
        //console.log(j);
    }
}
console.log(j); //Error cause var j cant escape function
// 4. Use a global variable
let name;