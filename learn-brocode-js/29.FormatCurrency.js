/*
    toLocaleString() = returns a string with a languange
                       sensitive representation of this

    number.toLocaleString(locale, {options});
    'locale' = specify that languange (undefinied = default)
    'options' = object with formatting options
*/

let myNum = 123456.789;
let myNum2 = 1;
// 1. Format Mata Uang
//myNum = myNum.toLocaleString("en-US"); // US English
//myNum = myNum.toLocaleString("hi-IN"); // Hindi
//myNum = myNum.toLocaleString("de-DE"); // Standard German

// 2. Format Mata Uang + Symbol
myNum = myNum.toLocaleString("en-US", { style: "currency", currency: "USD" })
//myNum = myNum.toLocaleString("hi-IN", { style: "currency", currency: "INR" })
//myNum = myNum.toLocaleString("de-DE", { style: "currency", currency: "EUR" })

// 3. Format Angka Diluar Mata Uang
myNum2 = myNum2.toLocaleString(undefined, { style: "percent" })
//myNum2 = myNum2.toLocaleString(undefined, { style: "celcius", unit: "celcius" })

console.log(myNum);
console.log(myNum2);