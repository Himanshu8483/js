// Que 1: Functions to change background color of the .box element
// These functions set the background color of the `.box` element to red, green, or blue
// and change the inner text to "Hello Himanshu"

// Function to change background color to red
let red = () => {
    let text = document.querySelector(".box");
    text.innerHTML = "Hello Himanshu";
    text.style.background = "red"; // Sets background color to red
}

// Function to change background color to green
let green = () => {
    let text = document.querySelector(".box");
    text.innerHTML = "Hello Himanshu";
    text.style.background = "green"; // Sets background color to green
}

// Function to change background color to blue
let blue = () => {
    let text = document.querySelector(".box");
    text.innerHTML = "Hello Himanshu";
    text.style.background = "blue"; // Sets background color to blue
}

// Que 2: Functions to change the background image of the #box element
// Function to set background image to "car1.png"
let div1 = () => {
    let text = document.querySelector("#box");
    text.style.backgroundImage = "url('img/car1.png')"; // Set background image
    text.style.backgroundSize = "contain"; // Ensures the image fits within the element
    text.style.backgroundRepeat = "no-repeat"; // Prevents image repetition
    text.style.backgroundPosition = "center"; // Centers the image within the element
}

// Function to set background image to "car2.png"
let div2 = () => {
    let text = document.querySelector("#box");
    text.style.backgroundImage = "url('img/car2.png')";
    text.style.backgroundSize = "contain";
    text.style.backgroundRepeat = "no-repeat";
    text.style.backgroundPosition = "center";
}

// Function to set background image to "car3.png"
let div3 = () => {
    let text = document.querySelector("#box");
    text.style.backgroundImage = "url('img/car3.png')";
    text.style.backgroundSize = "contain";
    text.style.backgroundRepeat = "no-repeat";
    text.style.backgroundPosition = "center";
}

// Functions to change the appearance of #box2 with mouse hover events
// Function that is triggered when the mouse enters the #box2 element
let go = () => {
    let text = document.querySelector("#box2");
    text.style.background = "blue"; // Changes background color to blue
    text.style.transform = "rotate(45deg)"; // Rotates the box by 45 degrees
    // text.style.borderRadius = "50%"; // Uncomment to make the box circular
}

// Function that is triggered when the mouse leaves the #box2 element
let back = () => {
    let text = document.querySelector("#box2");
    text.style.background = "yellow"; // Changes background color to yellow
    text.style.transform = "rotate(0deg)"; // Resets rotation to 0 degrees
    text.style.borderRadius = "0%"; // Resets border radius to square
}

// Function to toggle the display of #box when called
let go = () => {
    let text = document.querySelector("#box");
    // Toggle visibility between 'block' (visible) and 'none' (hidden)
    if (text.style.display == "none") {
        text.style.display = "block"; // Show the box
    } else {
        text.style.display = "none"; // Hide the box
    }
}

// Variables and functions to manipulate font size of the #num element

let counter = 16; // Initial font size is set to 16px
// Function to double the font size of #num
let add = () => {
    let show = document.querySelector("#num");
    counter *= 2; // Double the font size
    show.style.fontSize = counter + "px"; // Apply the new font size
}

// Function to decrease the font size of #num by 1, but not below 5px
let sub = () => {
    let show = document.querySelector("#num");
    if (counter > 5) { // Ensure the font size doesn't go below 5px
        counter--; // Decrease the font size by 1px
        show.style.fontSize = counter + "px"; // Apply the new font size
    }
}

// Function to reset the font size of #num to 16px
let reset = () => {
    let show = document.querySelector("#num");
    counter = 16; // Reset the font size to 16px
    show.style.fontSize = counter + "px"; // Apply the default font size
}

// Function to display the text entered in the input field into the paragraph
let run = () => {
    let show = document.querySelector("#run").value; // Get value from input
    let give = document.querySelector("#par");
    give.innerHTML = show; // Set the value as inner text in the paragraph
}
