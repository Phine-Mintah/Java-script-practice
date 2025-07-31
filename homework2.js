document.title = "hello"

//Question num:1
let number = 2;
if(number % 2 === 0) {
    console.log("even number");

}
else {
    console.log("not an even number");
}



//Question num:2
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Question num:3
let j = 1;
do {
    secretNumber = Number(prompt("Enter the secret number"));
    j++;
} while (secretNumber !== 3);
alert("thanks");

//Question num:4
/// Prompt user for a number
const namer = parseInt(prompt("Enter a number to see its multiplication table:"));

// Check if the input is a valid number
if (isNaN(namer)) {
    alert("Please enter a valid number.");
} else {
    // Create a container for the multiplication table
    const tableContainer = document.createElement("div");
    tableContainer.innerHTML = `<h3>Multiplication Table for ${namer}:</h3>`;

    // Use a for loop to generate the table
    for (let i = 1; i <= 10; i++) {
        const result = namer * i;
        const tableRow = document.createElement("p");
        tableRow.textContent = `${namer} x ${i} = ${result}`;
        tableContainer.appendChild(tableRow);
    }

    // Add the table to the page
    document.body.appendChild(tableContainer);
}

//Question num:5
do {
    password = prompt("Enter the password");
} while (password !== "open");
console.log("Access granted");


//Question num:6
let sum = 0;
let numb = parseInt(prompt("Enter a number (0 to stop):"));

while (numb !== 0) {
    sum += numb;
    numb = parseInt(prompt("Enter a number (0 to stop):"));
}

const result = document.createElement("p");
result.textContent = `The sum of all numbers entered is: ${sum}`;
document.body.appendChild(result);


//Question num:7
let grade = 9;
if(grade >= 90){
    console.log("Grade A");
}
else if(grade >= 80){
    console.log("Grade: B");
}
else if(grade >= 70){
    console.log("Grade: C");  
}
else if(grade >= 60){
    console.log("Grade: D");
}
else{
    console.log("Grade: F");
}

//Question num:8
// Get input from user
let fun = parseInt(prompt("Enter a number: "));

// Check if the number is negative
if (fun < 0) {
    alert("Factorial is not defined for negative numbers");
} else {
    // Initialize result to 1
    let factorial = 1;

    // Calculate factorial using a for loop
    for (let i = 1; i <= fun; i++) {
        factorial *= i;
    }

    // Display the result
    alert("Factorial of " + fun + " is " + factorial);
}


//Question 9

// Get input from user
let num = parseInt(prompt("Enter a number to check if it's prime: "));

// Check if number is greater than 1
if (num <= 1) {
    alert(num + " is not a prime number");
} else {
    // Assume the number is prime until proven otherwise
    let isPrime = true;

    // Check for divisors from 2 to number-1
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    // Display the result
    if (isPrime) {
        alert(num + " is a prime number");
    } else {
        alert(num + " is not a prime number");
    }
}

//Question num:10


// Create a container for the pattern
const patternContainer = document.createElement("div");

// Use a for loop for rows (1 to 5)
for (let row = 1; row <= 5; row++) {
    let stars = "";
    // Inner loop for columns (print stars equal to the row number)
    for (let col = 1; col <= row; col++) {
        stars += "*";
    }
    // Create a paragraph element for each row of stars
    const rowElement = document.createElement("p");
    rowElement.textContent = stars;
    patternContainer.appendChild(rowElement);
}

// Add the pattern to the page
document.body.appendChild(patternContainer);

// bonus-Question

// Simple Rock, Paper, Scissors game without functions, events, or buttons
// Game runs directly when the page loads

// Ask the user for their choice
let userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();

// Validate user input
if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
  alert("Invalid choice! Please refresh and try again with rock, paper, or scissors.");
} else {
  // Generate computer's choice randomly
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  // Display both choices
  alert("You chose: " + userChoice + "\nComputer chose: " + computerChoice);

  // Determine the winner using if-elif-else logic
  let result;
  
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  // Display the result
  alert(result);
}










//not needed
// while(i <100) {
//     console.log(i);
//     i++;
// }

// if(i = 3 * 3){
//     console.log("fizz");
// }
// else if(i = 5 * 5){
//     console.log("buzz");
// }
// else{
//     console.log("fizzbuzz");
// }

// FizzBuzz implementation using only loops and if-else statements

// let Bomb = 1;
// while(Bomb < 10) {
//     console.log(Bomb);
//     Bomb++;
// }

//Question num:6
// do {
    
// } while ();
