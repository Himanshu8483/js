let button = document.querySelector("#btn");
button.addEventListener("click", () => {
    let div = document.querySelector("#par");
    if (div.style.display == "none") {
        div.style.display = "block";  // Show the paragraph if it's hidden
        button.innerHTML = "Hide";    // Change button text to "Hide"
    } else {
        div.style.display = "none";   // Hide the paragraph if it's shown
        button.innerHTML = "Show";    // Change button text to "Show"
    }
});



// document.querySelector("#inp").value returns a string, not a DOM element.
// You are trying to call addEventListener on a string, but only DOM elements (like an input field) have the addEventListener method.
let go = () => {
    let text = document.querySelector("#box");
    let btn = document.querySelector("#btnn");
    // Toggle visibility between 'block' (visible) and 'none' (hidden)
    if (text.style.display == "none") {
    btn.innerHTML="hide button";
        text.style.display = "block"; // Show the box
        
    } else {
        text.style.display = "none"; // Hide the box
    btn.innerHTML="show button";
    }
}

let isname = true;
setInterval(() => {
    document.title = isname ? "Himanshu" : "Kushwaha";  // Toggle title every second
    isname = !isname;  // Alternate between true/false
}, 1000);

// Destructuring of Objects
const student={name:"Himanshu", age:22, city:"Rewa"};
const {name, age}=student;
console.log(name);      // Himanshu
console.log(age);       // 22

// // Spread Operator
const student1 = {name:"Himanshu", age:25, Marks:80};
const student2 = {city:"Rewa", grade:"A",Marks:90}
const combinedStdent = {...student1, ...student2};
console.log(combinedStdent);        // { name: 'Himanshu', age: 25, Marks: 90, city: 'Rewa', grade: 'A' }

let students = [
    { name: "Himanshu", age: 22, city: "Rewa" },
    { name: "Jatin", age: 23, city: "Sehore" },
    { name: "Vijay", age: 24, city: "Dewas" }
];
console.log(students)
let updatedStudents = students.map((e) => {
    return  {...e, age: e.age + 1 } // Create a new object with updated age (add 1 to the age)
});
console.log(updatedStudents);  // Output the new array with updated ages

let fill = updatedStudents.filter((e) => {
    return e.age > 23;  // Only include students whose age is greater than 23
});
console.log(fill);


// Function to display the text entered in the input field into the paragraph
let run=()=> {
    let show = document.querySelector("#run").value;
    let give = document.querySelector("#par");
    give.innerHTML = show;
} /// or
let inp = document.querySelector("#inp");
inp.addEventListener("input", () => {
    let show = document.querySelector("#show");
    show.innerHTML = inp.value;           // Display the input value live in the paragraph
})