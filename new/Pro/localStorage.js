// // Function to set default values in localStorage
// let set = () => {
//     localStorage.setItem("Name", "Himanshu"); // Setting default name
//     localStorage.setItem("Age", 22); // Setting default age
// };

// let show = document.querySelector("#data"); // // Select the HTML element to display stored information

// let ans = localStorage.getItem("Name");     // Retrieve the stored name from localStorage
// show.innerHTML = ans; // Show the name in the HTML

// // Function to clear all data from localStorage
// let remove = () => {
//     localStorage.clear(); // Clear all stored data
// };

// Function to set new values from user input
let sett = () => {
    let inpname = document.querySelector("#name").value; // Get the value from input 
    let inpage = document.querySelector("#age").value; // Get the value from input

    localStorage.setItem("Name", inpname); // Store the new name
    localStorage.setItem("Age", inpage); // Store the new age

    location.reload(); // Reload the page to update displayed values
    // location.href = "index.html"; // redirect to another page
};

let show = document.querySelector("#show");     // Select the HTML to display the message    

// Retrieve stored name and age from localStorage
let name = localStorage.getItem("Name");
let age = localStorage.getItem("Age");
show.innerHTML = `Hello ${name} and your age is ${age} Years`;     // Display message in the 'show' element
