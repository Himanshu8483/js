// let que=()=>{
//     // Question 1: Greet the User
// 	    // Use a prompt to ask the user for their name. Display an alert that says, "Hello, [Name]!" using their input.
//     let name = prompt("Enter Your Name");
//     alert ("Hello, " + name + "!")

//     // Question 2: Confirm to Show Message
//         // Ask the user: "Do you like JavaScript?" using confirm. If they click OK, show an alert with "That's great!". If they click Cancel, show an alert with "No worries, keep learning!".
//     let user = confirm("Do you like JavaScript");
//     (user == true) ? alert("That's great!") : alert("No worries, keep learning!") ;

//     // Question 3: Replace Text
//         // You have a string: "JavaScript is easy. I love javaScript!" Replace "JavaScript" with "Coding" globally. Display the new string using an alert.
//     let str= "Javascript is easy. I love javascript";
//     let string = confirm(str);
//     if(string==true) {
//         let update = str.replace(/javaScript/ig, "Coding")
//         alert(update)
//     }
//     else {
//         alert(str)
//     } 

//     // Question 4: Count Numbers
// 	    // Write a for loop to print numbers from 1 to 10 in the console.
//     for (let n=1; n<=10; ++n){
//         console.log(n);
//     }

//     // Question 5:
// 	// Use a prompt to ask the user to enter 3 favorite fruits one by one. Store them in an array. Display the array in an alert: "Your favorite fruits are: [fruit1, fruit2, fruit3]".
//     let arr = [];
//     let str = null;
//     for (let i=1; i<=3; ++i){
//         str = prompt("Enter Your Favourite Fruits");
//         arr.push(str);
//     }
//     alert(`Your favourite fruits are : [ ${arr} ]`);
//     console.log(arr)
//     console.log(typeof(arr))         // object
//     console.log(typeof(str))         // string

//     // Question 6: Sum of Numbers in an Array
// 	    // Create an array of numbers: [10, 20, 30, 40, 50].
// 	    // Use a loop to calculate the sum of all the numbers in the array.
// 	    // Display the result using an alert. 
//     let num = [10, 20, 30, 40, 50];
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         sum += num[i];
//     }
//     alert("The sum of the numbers in the array is: " + sum);

//     // Question 7: Filter Even Numbers
//         // Use a prompt to ask the user to enter 5 numbers one by one.. Store them in an array. Use the filter() method to find all the even numbers. Display the even numbers in an alert.
//     let num=null;
//     let arr=[];
//     console.log(typeof(num)) ;        // object : (primitive data type)
//         for (let i=1; i<=5; ++i){
//             num=prompt(`Enter ${i} Number`);
//             arr.push(num);
//         }
//         let filter = arr.filter((n)=> n%2==0)
//         alert("Even Numbers are : " + filter);
//         console.log("Even Numbers are : " + filter) ;
//         console.log(typeof(filter)) ;        // object
//         console.log(typeof(num)) ;        // string

//     // Question 8: Replace and Uppercase
//         // You have a string: "html is easy. html is fun!". Replace "html" with "CSS" globally and convert the entire string to uppercase. Show the final string in an alert.
//         let text= "html is easy. html is fun!";
//         let string = confirm(text);
//         if(string==true){
//             let str=text.replace(/html/ig, "css").toUpperCase();
//             alert(str);
//         }
//         else{
//             alert(text);
//         }

//     // Question 9: Multiplication Table
//         // Ask the user to enter a number using prompt. Use a for loop to display the multiplication table for that number (from 1 to 10). Display the result in the console or with alert 	(e.g., "5 x 1 = 5").
//     let num = prompt("Enter Number to Pring Table");
//     for (let i=1; i<=10; ++i){
//         console.log(num*i);             // table print
//         console.log(typeof(num*i))       // number
//     }
// }
// que();