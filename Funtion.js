document.title = "Function";
/**
 * Prints a "Hello World" message to the console and writes
 * a heading element to the page with the same text.
 */
function hello() {
    // Print the message to the console
    console.log("Hello World");
    // Write the message to the page
    document.write("<h1>Hello World</h1>");

}

// Call the hello function 

hello();

hello();

if (true) {
    console.log("This is true");

} else {
    console.log("This is false");
}
hello(); 

if(false){
    console.log("This is false");
}
else{
    console.log("This is true");
}

function hello5(name, age, classes) {
    console.log("Hello " + name);
    console.log("I am " + age);
    console.log("I am in " + classes);
}

hello5("Lora", 20, "Web Development");
hello5("james", 25, "Data Science");
hello5("amanda",  22, "Goddess");




function addTwoNumbers(num1, num2) {
    let answer = num1 + num2;
    return answer;
}

addTwoNumbers(4, 4) 

console.log(addTwoNumbers(4, 4)); 

let age = prompt("Enter your age");
console.log(age);

let close = confirm("Do you want to close this page?"); 
console.log(close);

const arrowFunction=(age)=>{
    console.log("Hello World age is " + age);
}

arrowFunction(36);

function new2 (name){
    console.log("hello " + name);
    
}

new2("John")

function add(num1, num2){
    let numbers = num1 + num2;
    return numbers;
}

add(56, 83);
console.log(add(56, 83));








function math(num1, num2, num3) {
    let answer = num1 / num2 * num3;
    return answer;
}

math(1089, 5, 890);

console.log(math(1089, 5, 890));

function strong(ed){
    const fun = 67 + ed;
    console.log("The answer is " + fun);
    // return fun;
}

strong(87*6);

function moreMath(tip){
    let ctyfi = 6870 + tip;
    return ctyfi
    
}

moreMath(569);
console.log(moreMath(569));
