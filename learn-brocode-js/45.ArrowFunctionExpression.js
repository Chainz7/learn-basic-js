// arrow function = compact alternative to a traditional function
//       =>

// 1. First
const greeting = (userName) => { console.log(`Hello ${userName}`); }

greeting("Bro");

// 2. Second
const percent = (x, y) => x / y * 100;

console.log(`${percent(80, 150)}%`);

// 3. Third
let grades = [100, 50, 90, 60, 80, 70];

/*grades.sort(descending);
grades.forEach(print);

function descending(x, y) {
    return x - y;
}
function print(element) {
    console.log(element);
}*/ //From This to This >> 

grades.sort((x, y) => { x - y; });
grades.forEach((element) => { console.log(element); });

