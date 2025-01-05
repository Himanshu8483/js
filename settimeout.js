// // JavaScript SetTimeout & SetInterval Notes
// // setTimeout(): Executes code after a specified delay (once).
// // setInterval(): Executes code at regular intervals (repeatedly).
// // clearInterval(): Stops the execution of setInterval().
// // ---------------------------------------------------------------------------------------------------
// // **1. Synchronous vs Asynchronous Behavior in JavaScript**:
// // JavaScript is traditionally a synchronous language, meaning code runs in sequence.
// // However, JavaScript provides mechanisms like `setTimeout()` and `setInterval()` that make it behave asynchronously,
// // allowing you to run code after a delay or repeatedly at intervals.

// // ---------------------------------------------------------------------------------------------------
// // **2. `setTimeout()` Function**:
// // Purpose: Used to execute a piece of code after a specified delay (in milliseconds).
// // Syntax:
// // setTimeout(callback, delay);
// //   - `callback`: The function to be executed after the delay.
// //   - `delay`: The time in milliseconds to wait before executing the function.

// // Example of using `setTimeout`:
// startt = () => {
//     setTimeout(() => {
//         console.log("I am running");  // Runs after 3 seconds
//     }, 3000);
// }

// console.log("Starting");
// setTimeout(() => {
//     console.log("I am running");  // Delay after 3 seconds
// }, 3000);

// console.log("Ending");

// // Output: 
// // Starting
// // Ending
// // I am running

// // Explanation: Even though `setTimeout` is called after "Starting", the message "I am running" will only log after 3 seconds.

// // ---------------------------------------------------------------------------------------------------
// // **3. `setInterval()` Function**:
// // Purpose: Used to repeatedly execute a piece of code at regular intervals (in milliseconds).
// // Syntax:
// // setInterval(callback, interval);
// //   - `callback`: The function to be executed every interval.
// //   - `interval`: The time in milliseconds between each execution of the function.

// // Example of using `setInterval`:
// startt = () => {
//     setInterval(() => {
//         console.log("I am running");  // Repeats every 1 second
//     }, 1000);
// }

// let okk = () => {
//     setInterval(() => {
//         let show = document.querySelector("#click");
//         show.style.backgroundColor = "red";  // Change background color every 1 second
//     }, 1000);
// }

// // ---------------------------------------------------------------------------------------------------
// // **4. Using `setInterval()` with a Counter**:
// // Example: Incrementing or decrementing a counter at regular intervals:

// let counter = 10;

// let inc = () => {
//     setInterval(() => {
//         let show = document.querySelector("#increase");
//         show.innerHTML = counter;  // Display the counter
//         counter--;  // Decrease the counter each time the interval runs
//     }, 1000);
// }

// // This shows a countdown on the page every second, decrementing the counter value.

// // ---------------------------------------------------------------------------------------------------
// // **5. Clearing an Interval with `clearInterval()`**:
// // Purpose: Stops the repeated execution of code initiated by `setInterval()`.
// // Example of clearing an interval:
// let enter = setInterval(() => {
//     console.log("Running");
// }, 1000);

// let startt = () => {
//     clearInterval(enter);  // Stops the interval
// }

// // Example with counter:
// let counter = 0;
// let enter = setInterval(() => {
//     console.log("Running");
//     counter++;
//     if (counter >= 6) {
//         clearInterval(enter);  // Stop after 6 iterations
//     }
// }, 1000);

// // ---------------------------------------------------------------------------------------------------
// // **6. `setTimeout()` + `setInterval()` Example (Stopping an Interval)**:
// // Example: Use `setInterval()` to execute code at intervals and then clear it after a certain period using `setTimeout()`.

// let target = document.querySelector("#target");
// let counter = 1;
// let show = setInterval(() => {
//     target.innerHTML = counter++;  // Increment counter every second
// }, 1000);

// setTimeout(() => {
//     clearInterval(show);  // Stop the interval after 6 seconds
// }, 6000);

// // ---------------------------------------------------------------------------------------------------
// // **7. Toggle Document Title Using `setInterval()`**:
// // Purpose: Changing the document's title every second (toggle between two names).

// let isname = true;
// setInterval(() => {
//     document.title = isname ? "Himanshu" : "Kushwaha";  // Toggle title every second
//     isname = !isname;  // Alternate between true/false
// }, 1000);

// // ---------------------------------------------------------------------------------------------------
// // **8. Breaking Condition in `setInterval()`**:
// // Purpose: Stop the `setInterval()` when a condition is met.

// let target = document.querySelector("#target");
// let counter = 10;
// let show = setInterval(() => {
//     target.innerHTML = counter--;  // Display counter value
//     if (counter == 0) {
//         clearInterval(show);  // Stop the interval when counter reaches 0
//     }
// }, 500);

// // ---------------------------------------------------------------------------------------------------
// // **9. Stopwatch with `setInterval()`**:
// // Purpose: Create a countdown timer (stopwatch) using an input value and decrease it every second.

let run = () => {
    let inp = document.querySelector("#inp").value;  // Get input value
    let enter = setInterval(() => {
        let display = document.querySelector("#num");
        display.innerHTML = inp;  // Show the input value in the display
        inp--;  // Decrease the input value
        if (inp < 0) {
            clearInterval(enter);  // Stop when it reaches 0
        }
    }, 1000);
}
