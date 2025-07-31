document.getElementById("Heading1").innerHTML = "hello"

let p = document.getElementsByTagName("p")[0]
p.innerHTML = "Hello there"

document.getElementsByClassName("class")[1].innerHTML = "yellow"

function the() {
    let p = document.getElementsByTagName("p")[1]
    p.innerHTML = "hello"
    alert("Now the color of the paragraph will change to red")
    p.style.color = "red"
}