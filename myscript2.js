
// let wether = "rain";

// if (wether === "rain") {
//     console.log("take an umbrella")
// }

// else {
//     console.log("don't take an umbrella")
// }

// if you finish your homework you can play games
// let homework = "finished";

// if (homework === "finished") {
//     console.log("you can play games")
// }

// else {
//     console.log("you can't play games")
// }

// if you win the game you can go to the party
// let winGame = "true";

// if(winGame === "true") {
//     console.log("you can go to the party")
// }

// else {
//     console.log("you can't go to the party")
// }

// let number = 1;
// while (number < 50) {
//     console.log(number);
//     number++;
// }

// let number2 = 1;
// while (number2 <= 49) {
//     console.log(number2);
//     number2++;
// }
// let number = 1;
// if (number2 % 2 === 0) {
//     console.log(number2);
// }


// let health = 3;

// while (health > 0) {
//     console.log("you been hit! your is health:", health);
//     health--;
// };

// console.log("Game over");

let score = 50;

if (score >= 90) {
    console.log("Grade: A");
}else if (score >= 80) {
    console.log("Grade: B");
}else if (score >= 60) {
    console.log("Grade: C");
}else if (score >= 50) {
    console.log("Grade: D");   
}else {
    console.log("Grade: F");
};

document.title = "Hello World";
alert(document.title);

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start the week");
    break;

    case "Tuesday":
        console.log("Work smart");
    break;
    
    case "Wednesday":
        console.log("study smart");
    break;
    
    case "Thursday":
        console.log("rest");
    break;

    case "Friday":
        console.log("watch movies");
    break;

    default:
        console.log("not a day or another day");
}
//for loops are used when you know how many times you want loop
for(let i=1; i<=20; i++) {
    console.log(i);
}

// while loop is used when you don't know how many times you want to loop
let i = 1;
while(i <= 10) {
    console.log(i);
    i++;
}

// do while loop is used when you want to loop at least once
let j = 1;
do {
    password = prompt("Enter your password");
    j++;
} while (password !== "password") // && j <= 10);
console.log("correct password");

// for loop is used when you know how many times you want to loop
// for(let i=1; i<=10; i++) {
//     console.log(i);
// }
// 
for(let i=10; i<=80; i++) {
    console.log(i);
}

let y = 200;

while (y < 400) {
    console.log(y);
    y++;
}

let io = "hello God's children";
 do { alert ( io ) ; io ++ ; }
  while ( i < 3 ) ;

let x = 1;
while (x <= 10) {
    console.log("message " + x);
    x = x + 1;
}


let name = prompt("Enter your name");
console.log(name);

let age =  Number(prompt("Enter your age"));
console.log(age);

if(age === "") {
    do {
       prompt("Enter your age"); 
    } while (age === Number);
}
