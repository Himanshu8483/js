// Button hover event to change the button text and disable it
let btn = document.querySelector("#btn1");

btn.addEventListener("mouseenter", () => {  // Trigger on mouse hover (mouseenter)
    btn.innerHTML = "Disable Button";      // Change the text of the button
    console.log("hovered");
    btn.disabled = true;                   // Disable the button after hovering
});

// Live input update in a paragraph
let inp = document.querySelector("#inp");
inp.addEventListener("input", () => {
    let show = document.querySelector("#show");
    show.innerHTML = inp.value;           // Display the input value live in the paragraph
});

// Changing background color of a div based on button hover
let inp1 = document.querySelector("#red");
inp1.addEventListener("mouseenter", () => {
    let show = document.querySelector(".box");
    show.style.backgroundColor = "red";    // Change color to red when hovering over the red button
});
inp1.addEventListener("mouseleave", () => {
    let show = document.querySelector(".box");
    show.style.backgroundColor = "aqua";   // Reset color when mouse leaves
});

let inp2 = document.querySelector("#yellow");
inp2.addEventListener("mouseenter", () => {
    let show = document.querySelector(".box");
    show.style.backgroundColor = "yellow"; // Change color to yellow when hovering over the yellow button
});

let inp3 = document.querySelector("#green");
inp3.addEventListener("mouseenter", () => {
    let show = document.querySelector(".box");
    show.style.backgroundColor = "green";  // Change color to green when hovering over the green button
});

// Show/hide a paragraph when clicking a button
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
