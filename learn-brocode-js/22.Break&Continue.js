// Break = breaks out of a loop
// Continue = Skip an iteration of a loop

for (let i = 1; i <= 10; i += 1) {
    if (i == 5) {
        break; // stop di 5
    }
    console.log(i);
}
for (let i = 1; i <= 10; i += 1) {
    if (i > 2 && i < 8) {
        continue; // menghapus 3 - 7
    }
    console.log(i);
}