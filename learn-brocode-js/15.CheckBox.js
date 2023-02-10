document.getElementById("myButton").onclick = function () {

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if (myCheckBox.checked) { //checked = true or false
        console.log("You Are Subbed");
    }
    else {
        console.log("You Are UnSubbed");
    }
    if (visaBtn.checked) {
        console.log("You Are VISA");
    }
    else if (mastercardBtn.checked) {
        console.log("You Are MASTERCARD");
    }
    else if (paypalBtn.checked) {
        console.log("You Are PAYPAL");
    }
    else {
        console.log("Please Select Payment");
    }
}