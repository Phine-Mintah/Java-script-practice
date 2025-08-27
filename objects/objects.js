let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
}
console.log(car.brand);
console.log(car.model);

let book = {
    title: "JavaScript Basics",
    pages: 150,
}

book.pages = 200;
console.log(book.pages);

let student = {
    name: "Ama",
    age: 21
};

student.course = "Computer Science";
console.log(student);

let phone = {
    brand: "Samsung",
    model: "Galaxy S20",
    price: 500
};

delete phone.price;
console.log(phone);

let hobbies = {
    name: "Kwame",
    hobbies: ["Swimming", "Gaming", "Singing"]
};

console.log(hobbies.hobbies[1]);
