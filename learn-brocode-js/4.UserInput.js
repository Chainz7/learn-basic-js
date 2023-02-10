// How to accept user input

// Easy way with a window prompt
// let username = window.prompt("What your name");
// console.log(username);

// Difficult way HTML textbox
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}