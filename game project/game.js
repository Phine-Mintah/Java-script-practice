const randomNumber = Math.floor(Math.random() * 10) //+ 1;

let result = document.getElementsByTagName("h1")[0];
let input = document.getElementById("result");

console.log(randomNumber);


function checkNumbers() {
    if (randomNumber == input.value) {
        let answer = document.getElementsByClassName("p1")[0];
        answer.innerHTML = "correct answer";
        answer.style.color = "lightgreen";
        answer.style.display = "block";
        
    }

    // tasks.parentNode.insertBefore(p1, tasks.nextSibling)
    //     p1.textContent = "correct answer";
    //     p1.style.display = "block";
    //     return;

    if (randomNumber > input.value) {
        let gl = document.getElementsByClassName("p1")[0];
        gl.innerHTML = "Go higher";
        gl.style.display = "block";
        gl.style.color = ""
    }


    if (randomNumber < input.value) {
        let goHi = document.getElementsByClassName("p1")[0];
        goHi.innerHTML = "Go lower";
        goHi.style.color = "";
        goHi.style.display = "block";

    }

    // console.log("The function works");
    console.log(randomNumber);
    
}