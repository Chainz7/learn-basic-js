let a;
let b;
let c;

/* JS Console Version
a = window.prompt("Side A");
a = Number(a);
b = window.prompt("Side B");
b = Number(b);
c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
/* 
    contoh: A = 3 [3x3] = 9        //pow 
            B = 4 [4x4] = 16       //pow
            c = 25
            akar dari 25 = 5x5 = 5 //sqrt
*/
// console.log("Side C: ", c);

// HTML Version
document.getElementById("submitButton").onclick = function () {
    a = document.getElementById("aSide").value;
    a = Number(a);  // mengubah string dari html ke number
    b = document.getElementById("bSide").value;
    b = Number(b);  // mengubah string dari html ke number
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cSide").innerHTML = "Side C: " + c;
}