// Array of students with details
let students = [
    { name: "Himanshu", age: 22, city: "Rewa" },
    { name: "Jatin", age: 23, city: "Sehore" },
    { name: "Vijay", age: 24, city: "Dewas" }
];

// Types of Function:-
// Arrow Function with .map() Method:
// This is used to create a new array based on modifying the original array’s items.\
let updatedStudents = students.map((e) => {
    return { ...e, age: e.age + 1 };  // Create a new object with updated age (add 1 to the age)
});
console.log(updatedStudents);  // Output the new array with updated ages



// Arrow Function with .filter() Method:
// This is used to create a new array containing only the items that meet certain conditions. 
let fill = students.filter((e) => {
    return e.age > 23;  // Only include students whose age is greater than 23
});
console.log(fill);  // Output the filtered array of students

// Regular function declaration:
// function using the function keyword, and it can be used anywhere after it’s declared.
function num() {
    console.log("This is a regular function");
}
num();  // Call the function

// Arrow function expression:
// An arrow function is a more concise version of a regular function. It's often used for shorter functions.
let num2 = () => {
    console.log("This is an arrow function");
}
num2();  // Call the function

// Anonymous Function (Function Expression):
// An anonymous function has no name. It can be assigned to a variable and invoked.
let hii = function() {
    console.log("Anonymous function");
};
hii();  // Call the anonymous function

// Special Type of Anonymous Function (Arrow Function):
// This is still an anonymous function, but written using the arrow syntax, making it more concise.
let newarrow = () => {
    console.log("Arrow function as anonymous");
};
newarrow();  // Call the function

// IIFE (Immediately Invoked Function Expression):
// An IIFE is a function that is defined and immediately called.
(function() {
    console.log("IIFE function");  // It runs as soon as it's defined
})();
