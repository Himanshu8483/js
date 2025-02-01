// JAVA SCRIPT TEST 
// Q.1
// What is the output of the sort() method on the array numbers and multiply all numbers by two.
const numbers =  [3,7,1,9,2];
console.log(numbers.sort())
console.log(numbers.map(num=>num*2));

// Q.2
// Create a program that:
// Uses a confirm box to ask: "Do you want to see the numbers from 1 to If the user clicks "OK", display numbers alert. from 1 to 10 using a for loop and If the user clicks "Cancel", display "You canceled the action" using Alert.
let res=0;
let text = confirm("Do you want to see the numbers from 1 to 10?");
if (text==true){
    for (let i=1; i<=10; ++i) {
        res=res+i+" ";
}
alert(res);         // 1 2 3 4 5 6 7 8 9 10 
alert(typeof(res));     // string
}
else {
    alert("You Canceled the action")
}

// Q.3
// Create an HTML page with a <p> tag that has the text "Hello, World!" Add a button with the text "Change Text". When the button is clicked, change the text inside the <p> tag to "Hello,
// JavaScript!".
let okk=() =>{
let show = document.querySelector("#text")  
show.innerHTML= "<p> Hello JavaSript! </p>";
}

// Q4.
// Create a simple counter on a webpage:
// Display the number e in a <p> tag
// Add two buttons: "Increase" and "Decrease".
// Use onclick to increase or decrease the number by 1 when the buttons are clicked.
let counter=0;
let add=()=>{
    let show= document.querySelector("#num");
    counter++;
    show.innerHTML=counter;
}

let sub=()=>{
    let show1= document.querySelector("#num");
    if(counter>0){
    counter--;
    show1.innerHTML=counter;
    }

}
let reset=()=>{
    let show1= document.querySelector("#num");
    counter=0;
    show1.innerHTML=counter;
}

// Q5.
// Write a program using a loop to print the multiplication table of a number entered by the user.
// Ask for the number using prompt().
// Print the table from 1 to 10 in the browser.
let num = prompt("Enter number for table print")
for (let i =1; i<=10; ++i){
    let ans = num*i;
    document.write(ans+ " ");
}


