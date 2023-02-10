let userName = "";

while (userName == "" || userName == null) { //Jika username kosong maka akan infinite loop
    userName = window.prompt("Enter Your Name");
}

console.log("Hello", userName);