// Math functions to perform various calculations
console.log(Math.PI);  // Print the value of PI (3.141592653589793)
console.log(Math.abs(-7));  // Get the absolute value of -7 (returns 7)
console.log(Math.round(4.6));  // Round 4.6 to the nearest integer (returns 5)
console.log(Math.floor(4.9));  // Round 4.9 down to the nearest integer (returns 4)
console.log(Math.ceil(4.1));  // Round 4.1 up to the nearest integer (returns 5)
console.log(Math.sqrt(25));  // Calculate the square root of 25 (returns 5)
console.log(Math.sqrt(25));  // Calculate the square root of 25 again (returns 5)
console.log(Math.pow(2, 3));  // 2 raised to the power of 3 (returns 8)
console.log(Math.min(2, 5, 3, 11, 10));  // Find the minimum value (returns 2)
console.log(Math.max(2, 11, 10, 22, 3));  // Find the maximum value (returns 22)
console.log(Math.trunc(4.8));  // Remove the fractional part of 4.8 (returns 4)
console.log(Math.random());  // Generates a random number between 0 and 1
console.log(Math.floor(Math.random() * 10000));  // Generate a random integer between 0 and 9999 by flooring the random value

// Generate a 4-digit OTP
let otp = Math.floor(Math.random() * 9000 + 1000);  // Generate a random number between 1000 and 9999
console.log(otp);  // Print the 4-digit OTP


function Person(name, age){
    this.name=name;
    this.age=age;
}
Person();