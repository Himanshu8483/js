// // Get the current date and time
// let time = new Date();
// console.log(time.toLocaleString()); // Logs the current date and time in a readable format

// // Extract specific parts of the date
// let time1 = time.getFullYear();       // Gets the current year
// let time2 = time.getMonth();          // Gets the current month (0-11)
// let time3 = time.getDay();            // Gets the day of the week (0-6)
// let time4 = time.getHours();          // Gets the current hour
// let time5 = time.getMinutes();        // Gets the current minutes
// let time6 = time.getSeconds();        // Gets the current seconds
// let time7 = time.getMilliseconds();   // Gets the current milliseconds
// console.log(time7); // Logs the milliseconds

// Function to display the current day name
let timee = () => {
    let show = document.querySelector("#target"); // Select the paragraph to display the result
    let time = new Date(); // Get the current date
    let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    show.innerHTML = arr[time.getDay()]; // Display the name of the current day
};

// Function to calculate age based on the entered birth year
let age = () => {
    let show = document.querySelector("#text").value; // Get the birth year from the input
    let time = new Date(); // Get the current date
    let result = time.getFullYear() - show; // Calculate age (current year - birth year)
    let show1 = document.querySelector("#totalAge"); // Select the paragraph to display the result
    show1.innerHTML = result; // Display the calculated age
};

// Digital Clock
setInterval(() => {
    let show = document.querySelector("#display"); // Select the element to display the digital clock
    let time = new Date(); // Get the current date and time
    let currentTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`; // Format time as HH:MM:SS
    show.innerHTML = currentTime; // Display the current time
}, 1000); // Update the digital clock every second

// Display the current time in a different format (e.g., Current Time: HH:MM:SS)
let current = () => {
    let show = document.querySelector("#time"); // Select the element to display the current time
    let now = new Date(); // Get the current date and time
    let time = now.toLocaleTimeString(); // Format time in a readable HH:MM:SS format
    show.innerHTML = `Current Time: ${time}`; // Display the formatted current time
};
setInterval(current, 1000); // Update the displayed current time every second

// Alarm Functionality
let setAlarm = () => {
    let alarmTime = document.querySelector("#alarm").value; // Get the alarm time from the input box
    let show = document.querySelector("#message"); // Select the element to display the alarm message
    show.innerHTML = `Alarm set for ${alarmTime}`; // Show a message confirming the alarm is set
};
