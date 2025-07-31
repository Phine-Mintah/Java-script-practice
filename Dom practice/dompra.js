// document.body.innerHTML = "hello"
// document.body.style.backgroundColor = "red"
// document.body.style.color = "white"
document.getElementById("h1").innerHTML = "hello"

// document.getElementById("h1").style.backgroundColor = "red"
let nameChange = document.getElementsByTagName("h1")[1]
nameChange.innerHTML = "flare"

let className = document.getElementsByClassName("p1")[0]
className.innerHTML = "ead3ws"
nameChange.style.color = "gold"

let image = document.getElementById("img")
image.src = "black-hole-image.jpg"
image.style.height = "100px"

let header = document.getElementById("head")
function clickMe() {
    header.innerHTML = "hi there"
    alert("button clicked")
}

let Image = document.getElementById("img")
function hover() {
    Image.style.backgroundColor = "blue"
    Image.style.height = '150px'
}

function unhover() {
    Image.style.height = "6rem"
}

//body

let unloaded = document.getElementsByTagName("img")[1]
function unload() {
    unloaded.style.display = "flex"
    unloaded.style.alignItems = "center"
    unloaded.style.justifyContent = "center"
}

let True = ["fyeu", 23, "true", "what'd"]
// True = 1
console.log(True);



for(let i=34; i<=1330; i++){
console.log(i);
}

// while (c) {
    
// }

let name = "kofi"