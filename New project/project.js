let a = 0;
let name = "Project";
let some = a + name;
console.log(some);


const b = "jnuwehoc" + " " + "jwec";
console.log(b);

let c = false;
let d = true;
// let d = true ? 10 : 20;
// console.log(d);

let sum = c || d;
console.log(sum);

let tog = c && d;
console.log(tog);

let num1 = 464;
let num2 = 657;
let total = num1 + num2;
total = total + 100;
// total = total * 50;
console.log(total);

let damage = 6579010;
let health = 10000000;
// let healthAfterDamage = health - damage;
// console.log(healthAfterDamage);
if (damage > 19998249) {
    console.log("you've defeated the enemy");
}
else {
    // console.log("The world is defeated");
    console.log("Dance to your defeat");
}

/* A person gets Discount if
 1. Under 12 years old or senior citizen and is a weekend
 2. Write an if else statement to check if the person gets a discount
 3. If yes
    */
    let age = 12
    let isSeniorCitizen = true;
    let isWeekend = true;

    if (( age < 12 || isSeniorCitizen) && isWeekend === true) {
        console.log("discount applied");
    }
    else {
        console.log("no discount");
    }

// 
    let number = "0";
    if (number % 2 === 0) {
        console.log("Even number");
    }
    else {
        console.log("odd number");
    }

// check 

let userName = "admin";
let password = "12345";

if (userName === "admin" && password === "12345") {
    console.log("Login successful");
}
else {
    console.log("Invalid credentials");
}


let score = 7e1;

if (score >= 90) {
    console.log("A");
}
else if (score >= 80) {
    console.log("B");
}
else if (score >= 70) {
    console.log("C");
}
else if (score >= 60) {
    console.log("D");
}
else {
    console.log("F");
}


let num = 10;

switch (num) {
    case 1:
        console.log("Apple is nice");
        break;
    case 2:
        console.log("Orange is so sweet");
        break;
    case 3:
        console.log("Mango is so juicy");
        break;
    case 4:
        console.log("Watermelon is so refreshing");
        break;
    default:
        console.log("Item not found");
}

for  (let i = 0; i < 5; i++) {
    console.log("count " + i);
}

// write a for loop that prints the squares of the first 10
for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

let dig = "kjscheuic";

for (let w = 5; w <= 78; w++){
    console.log(w + w);    
}

let nam = 5;
while (nam <= 87) {
    console.log(nam);
    nam++
}

let fun = "play";
if (fun == "play") {
    console.log("ewuefweiucwokaie");
}
else if (fun == "ret"){
    console.log("gfgrtyt");
}

const isTrue = true;

// Funtion


//
const percentage = (score, totalScore) => {
    let totalPercentage = (score / totalScore) * 100;

    if (totalPercentage >= 80) {
        console.log("grade A");
    }
    else if (totalPercentage >= 70) {
        console.log("grade B");
    }
    else if (totalPercentage >= 60) {
        console.log("grade C");
    }
    else if (totalPercentage >= 50) {
        console.log("grade D");
    }
    else {
        console.log("grade F");
    }

    return totalPercentage;
};

console.log(percentage(90, 100));


function vuviv(number) {
        if (number % 2 === 0 && number % 5 === 0) {
            return "Even number and multiple of 5";
        } 
        else if(number % 2 === 0 && number % 5 !== 0) {
            return "even number and not multiple of 5";
        }
        else if (number % 2 !== 0 && number % 5 === 0) {
            return "Odd number and multiple of 5";
        }
        else {
            return "Odd number and not multiple of 5";
        }
    }

    console.log(vuviv(2));