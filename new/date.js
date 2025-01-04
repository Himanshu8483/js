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

// // Display the current time in a different format (e.g., Current Time: HH:MM:SS)
// let current = () => {
//     let show = document.querySelector("#time"); // Select the element to display the current time
//     let now = new Date(); // Get the current date and time
//     let time = now.toLocaleTimeString(); // Format time in a readable HH:MM:SS format
//     show.innerHTML = `Current Time: ${time}`; // Display the formatted current time
// };
// setInterval(current, 1000); // Update the displayed current time every second

// Function to display the current time on the webpage
let current = () => {  // Define a function to show the current time
    let show = document.querySelector("#time");  // Select the element with id "time" to display the time
    let now = new Date();  // Create a new Date object to get the current time
    let time = now.toLocaleTimeString();  // Convert the time to a readable format (like 12:05:30 PM)
    show.innerHTML = `Current Time: ${time}`;  // Display the current time inside the HTML element
};
setInterval(current, 1000);  // Run the 'current' function every second to update the time

// Alarm Functionality 
let setAlarm = () => {  // Define a function to set an alarm
    let alarmTime = document.querySelector("#alarm").value;  // Get the alarm time input from the user
    let int = setInterval(() => {  // Check every second if the current time matches the alarm time
        let show = document.querySelector("#message");  // Select the element to show alarm messages
        show.innerHTML = `Alarm set for ${alarmTime}`;  // Display a message with the alarm time

        let time = new Date();  // Get the current time
        time = `${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}`;  // Format the time as 'HH:MM'

        if (alarmTime == time) {  // Check if the current time matches the alarm time
            show.innerHTML = "Alarm Snoozing";  // Show a message indicating the alarm is ringing
            document.querySelector("#ring").play();  // Play the alarm sound
            show.style.color = "Red";  // Change the message color to red

            setTimeout(() => {  // Stop the alarm after 6 seconds
                document.querySelector("#ring").pause();  // Pause the alarm sound
                clearInterval(int);  // Stop checking the time
                show.innerHTML = "Alarm Stopped";  // Update the message to indicate the alarm has stopped
            }, 10000);  // Stop the alarm sound after 10 seconds
        }
    }, 1000);  // Check the time every second
};
