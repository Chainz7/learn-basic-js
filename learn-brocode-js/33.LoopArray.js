let prices = [1, 3, 5, 7, 9];
let prices2 = [2, 4, 6, 8];
let prices3 = [10, 20, 30, 40];

// 1. Standart FOR Array + / Forward
for (let i = 0; i < prices.length; i += 1) {
    console.log(prices[i]);
}
// 2. Standart FOR Array - / Backward
for (let j = prices2.length - 1; j >= 0; j -= 1) {
    console.log(prices2[j]);
}
// 3. Better + / Forward
for (let price3 of prices3) {
    console.log(price3);
}