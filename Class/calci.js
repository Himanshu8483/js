// A variable to store the current input for the calculation
let store = "";

// Function to add the clicked value to the `store` string
let cal = (value) => { 
    let show = document.querySelector("#display");  // Select the display area
    store = store + value;  // Append the clicked value to `store`
    show.innerHTML = store;  // Update the display with the current calculation
}

// Function to evaluate the expression and show the result
let result = () => {
    let show = document.querySelector("#display");  // Select the display area

    // Evaluate the stored string expression (like "1+2")
    show.innerHTML = eval(store);  // Display the result of the evaluation
    store = eval(store);  // Store the result as a number (e.g., 3)
    store = store.toString();  // Convert the result back to a string for further calculations
}

// Function to delete the last character from the `store` string
let del = () => {
    let show = document.querySelector("#display");  // Select the display area

    store = store.slice(0, -1);  // Remove the last character from the string
    show.innerHTML = store;  // Update the display with the modified string
}

// Function to clear the display and reset the `store` string
let ac = () => {
    let show = document.querySelector("#display");  // Select the display area

    store = "";  // Reset the store string to empty
    show.innerHTML = store;  // Clear the display area
}

// Function to perform Square of number
let sq = () => {
    let show = document.querySelector("#display");
    store = store*store // Square the number 
    show.innerHTML = store;
};
