let isPremiumMember = true;
let totalPrice = 1;
let hasCoupon = false;


if (isPremiumMember || (totalPrice >= 50 && hasCoupon)) {
    console.log("Eligible for free shipping");


} else {
    console.log("Not eligible for free shipping");
}

// Instead of redeclaring age, just assign a new value if needed
// let age = 18; <- This is causing the error if age is already declared
// Just assign if it already exists

let age = 106;
let hasReferralCode = false
let isStudent = true;

if ((age >= 18 && hasReferralCode) || isStudent) {
    console.log("Eligible for gym membership");


} else {
    console.log("Not Eligible for gym membership");  
}

let a = 10;
let b = 20;
console.log(++a);

const True = 3;
const False = "6";
const u = "true"
if (u === true){
    console.log(True);    
}
else{
    console.log(False);
}

let t = 6;
let g = 7;
t = 34;
let sept = g + t;
console.log(sept);
document.write(sept)