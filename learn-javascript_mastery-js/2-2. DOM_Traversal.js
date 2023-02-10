/* Copy ke HTML
    <style>
        body {
            margin: 0;
        }

        div {
            display: flex;
            margin: 1.5rem;
            padding: 1rem;
            border: 3px solid black;
            min-height: 1rem;
            flex-grow: 1;
        }

        .grandparent {
            background-color: hsl(0, 50%, 50%);
            flex-direction: column;
        }

        .parent {
            background-color: hsl(100, 50%, 50%);
        }

        .child {
            background-color: hsl(200, 50%, 50%);
        }
    </style>
    <script src="script.js" defer></script>
</head>

<body>
    <div class="grandparent" id="grandparent-id">
        <div class="parent">
            <div class="child" id="child-one"></div>
            <div class="child"></div>
        </div>
        <div class="parent">
            <div class="child"></div>
            <div class="child"></div>
        </div>
    </div>
</body>
*/

// 1. GetElementById
const grandparent = document.getElementById("grandparent-id")

// changeColor(grandparent)

// function changeColor(element) {
//     element.style.backgroundColor = "#333"
// }

// 2. GetElementByClassName
const parent = Array.from(document.getElementsByClassName("parent"))

// parent.foreach(changeColor)

// function changeColor(element) {
//     element.style.backgroundColor = "#333"
// }

// 3. QuerySelector
const grandparents = document.querySelector("#grandparent-id") // id
const grandparents2 = document.querySelector(".grandparent")   // class

// // changeColor(grandparents) // id
// changeColor(grandparents2)   // class

// function changeColor(element) {
//     element.style.backgroundColor = "#333"
// }

// 4. QuerySelectorAll
const parents = document.querySelectorAll(".parent")  

// parents.forEach(changeColor)

// function changeColor(element) {
//     element.style.backgroundColor = "#333"
// }

// 5. SelectingChildren
const parentss = Array.from(grandparent.children)
const parentOne = parentss[0]
const children = parentOne.children

// parentss.forEach(changeColor)
// changeColor(children[1])

// function changeColor(element) {
//     element.style.backgroundColor = "#333"
// }

// 6. SelectingDescendant
const childOne = grandparent.querySelector('.child')
const childrenn = grandparent.querySelectorAll('.child') 

// changeColor(childOne)
// childrenn.forEach(changeColor)

// function changeColor(element) {
//     element.style.backgroundColor = "#333"
// }

// 7. SelectingParent
const childOnee = document.querySelector("#child-one")
const parentsss = childOnee.parentElement
const grandparentss = parentsss.parentElement

// changeColor(grandparentss)

// function changeColor(element) {
//     element.style.backgroundColor = "#333"
// }

// 8. SelectingAncestors
const childOneee = document.querySelector("#child-one")
const grandparentsss = childOneee.closest(".grandparent")

// changeColor(grandparentsss)

// function changeColor(element) {
//     element.style.backgroundColor = "#333"
// }

// 9. NextElementSibling
const childOneeee = document.querySelector("#child-one")
const childTwo = childOneeee.nextElementSibling

changeColor(childTwo)

// 10. PreviousElementSibling
// changeColor(childTwo.previousElementSibling)

function changeColor(element) {
    element.style.backgroundColor = "#333"
}

