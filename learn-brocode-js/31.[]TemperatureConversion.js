// HTML
document.getElementById("submitButton").onclick = function () {

    let temp;

    if (document.getElementById("cButton").checked) {
        temp = document.getElementById("temperatureField").value;
        temp = Number(temp);
        temp = toCelcius(temp);
        document.getElementById("converter").innerHTML = temp + "`C";
    } else if (document.getElementById("fButton").checked) {
        temp = document.getElementById("temperatureField").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("converter").innerHTML = temp + "`F";
    } else {
        document.getElementById("converter").innerHTML = "Select a Unit";
    }

}
// Console
let temp = 32;
temp = toFahrenheit(temp);
console.log(temp);
// Function For Console & HTML
function toCelcius(temp) {
    return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}
