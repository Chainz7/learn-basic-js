const answer = Math.floor(Math.random() * 10 + 1); //Angka Random Ditentukan Disini
let guesses = 0;

document.getElementById("guessSubmit").onclick = function () {
    let guess = document.getElementById("guessField").value;
    guesses += 1;

    if (guess == answer) {
        alert(`${answer} is the #. It took you ${guesses} guesses`)
    } else if (guess < answer) {
        alert("Too Small");
    } else {
        alert("Too Large");
    }
}