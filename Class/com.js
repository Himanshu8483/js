Basic JS

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="string()">Click Me!</button><br><br>
    <button onclick="clickme()">Click</button>
    <p id="text">Ans Come's Here</p>
    <h1 onclick="arrow(5,6)">Click here to check</h1>
    <h1 onclick="arrows('HIMANSHU')">Click here</h1>



    <script src="all.js"></script>
</body>
</html>

console.log("Hello there is \nHimanshu \t Kushwhaha\"s JS")    // Output: Himanshu         Kushwhaha"s JS
// \n : new line, \t: tab 

// PRIMITIVE DATA TYPES 
var a=55;
console.log(a)
console.log(typeof(a))      // number
var b="1"
console.log(typeof(b))      // string
var c=true;
console.log(typeof(c))      // boolean
var d;              
console.log(typeof(d))      // undefined
var e=null;     
console.log(typeof(e))      // object
var f=5n;
console.log(typeof(f))     // bigint    
var g=Symbol("string");
console.log(typeof(g))      // symbol

// ARITHMETIC OPERATOR
var n =2 ;
var N ='3';
console.log(num = n + N);      // 23 : string taken priority concat plus sign only 
console.log(n + parseInt(N));  // 5 : addition perform
console.log(typeof(num))       // string
console.log(num = n - N);      // -1 : number taken priority
console.log(num = n * N);      // 6
console.log(typeof(num))       // number
console.log(num = "Division = " + (n / N))     // Division = 0.6666666666666666
console.log(num = "Reminder = " , (n % N))      // Reminder =  2
console.log(typeof(num))       // string 

// FEATURES
function start(){
    var a=5;
    var a= 6;       // redclare var allowed
    let a=5;       
    let a= 6 ;      // redclare let not allowed
    const a = 5;
    const a = 6 ;   // redeclare const not allowed
    var a = 5;
    a= 7;           // reassignment var allowed
    let a= 5;
    a = 6;          // reassignment let allowed
    const a= 5;
    a = 6;          // reassignment const not allowed

    var a=5;           // Function-Scoped
    {
        var a= 6 ;
        console.log("block scope = " + a)   // block scope = 6
    }
    console.log("outer message = " + a)     //outer message = 6

    let a=5;            // Block-Scoped
    {
        let a= 6 ;
        console.log("block scope = " + a)   // outer message = 6
    }
    console.log("outer message = " + a)     // outer message = 5
    
    const a=5;          // Block-Scoped
    {
        const a= 6 ;
        console.log("block scope = " + a)    // outer message = 6
    }
    console.log("outer message = " + a)     // outer message = 5
}
start();        // Function Call


BOM

// BROUSER OBJECT MODEL (BOM)
function bom(){
    window.prompt("Enter Anything")
    window.alert("Welcome to our Website")
    window.confirm("Let's Open")

    let num1= (prompt("Enter Number")) 
    let num2=(prompt("Enter Number"))
    alert(num1+num2)     // concat because auto addition not work
    alert(parseInt(num1)+parseInt(num2))     // addition value
    alert(num1-num2)     // substract
    alert(num1*num2)     // mulipl
    alert(num1/num2)     // divide
    alert(num1%num2)     // reminder

// CONDITIONAL STATEMENT
    // Confirm from user
    let a = confirm("Are you ok?")
    if(a ==true){
        alert("yes I'm Ok")
    }
    else{
        alert("no I'm not Ok")
    }

    // Positive, Negitive or Zero
    let a=(prompt("Enter Number"))
    if(a==0){
        alert("Zero")
    }
    else if (a<0){
        alert("negitive")
    }
    else{
        alert("positive")
    }
}
bom();    

Practice Set 1

function loop(){ 
    // Question 1: Ask the user of their age and if it is greater than or equals to 18 with Ternary operator and display the result in alert.
    let age=prompt("Enter your Age")
    age>=18 ? alert("Adult") : alert("Child") 
    // or
    let age=prompt("Enter Age")
    let ans = age >= 18 ? "Adult" : "Child" ;
    alert(ans); 

    // Question 2: Ask the user if they have completed a course and have a certificate by (Confirm) if both Ok then give a "Completed" message by Alert otherwise "Not completed".
    let ans1= confirm ("Are you get Certificate")
    let ans2= confirm ("Are you completed your Course")
    if(ans1 && ans2){
    alert("Completed")
    }
    else {
    alert("Not Completed")
    }

    // Question 3: Ask the user for the price of an item and (Confirm) whether they have a discount coupon. Apply a 10% discount if they confirm.
    let price= prompt("Enter Price");
    let discount= confirm ("Are you have a discount coupon");
    if (discount==true) {
        alert("10% Discount" + price*.9);
    }
    else {
        alert(price);
    }

    // Question 4: Ask the user for their exam score and determine if they passed or failed. (Above 33 Pass)
    let score= prompt("Enter Percentage");
    if(score>=33 && score<=100)
    {
        alert("pass");
    }
    else {
        alert ("fail");
    }

    // Question 5: Check Entered number is even or odd.
    let num= prompt("Enter num to check even or odd");
    if(num%2==0)
    {
        alert("even");
    }
    else {
        alert ("odd");
    }

    // Question 6: Ask for conformation "Are you sure to delete" if ok give message "Item Deleted" otherwise "Cancelled".
    let num= confirm("Are you sure to delete");
    if(num==true)
    {
        alert("deleted");
    }
    else {
        alert ("cencelled");
    }

    // Question 7: Check Entered number is Positive or Negative.
    let num= prompt("Enter Number");
    if(num>=0)
    {
        alert("positive");
    }
    else {
        alert ("negative");
    }

    // Question 8: Print 1-10 number in P tag by while loop.
    let num = 10;
    let i=1 ;
    while(i<=num){
        console.log(i);
        ++i;
    }

    // Question 9: Keep asking the user to input a number until they enter a number greater than 10. by Do while loop.
    let num;
    do{
        num = prompt("Enter Number Greater than 10");
    }
    while(num<=10);
    alert ("Thankyou");

    // Question 10: Ask the user to enter a day of the week (1 for Monday, 2 for Tuesday, etc.) and display the name of the day. by Switch.
    let day = prompt("enter num to print day")
    switch(parseInt(day)){
        case 1 :alert("Monday")
        break;
        case 2 :alert("Tuesday")
        break;
        case 3 :alert("Wednesday")
        break;
        case 4 :alert("Thursday")
        break;
        case 5 :alert("Friday")
        break;
        case 6 :alert("Saturday")
        break;
        case 7 :alert("Sunday")
        break;
        default: alert ("Invalid")
        break;
    }
}
loop(); 


DOM

// DOCUMENT OBJECT MODEL (DOM)
// STRING
function string(){
    let text1="This is an string";
    console.log(text1.length)       // 17
    console.log(text1.charAt(12))      // t
    console.log(text1.slice(8))        // an string
    console.log(text1.slice(2,10))     // is is an
    console.log(text1.substring(2,10))  // is is an
    console.log(text1.toUpperCase())    // THIS IS AN STRING
    console.log(text1.toLowerCase())    // this is an string
    console.log(text1.charAt(3))        // s
    console.log(text1.charCodeAt(8))     // 97
    console.log(text1.indexOf("s"))     // 3

    let text2="maken by me";
    console.log(text1.concat(" "+ text2))   // This is an string maken by me

    let text3 = "   okk";
    console.log(text3.trim())       // okk

    let text4 = "python Python is pythonsql";
    console.log(text4)                                   // python Python is pythonsql
    console.log(text4.replace("python", "Function"))     // Function Python is pythonsql : change only first
    console.log(text4.replace(/python/i, "Function"))    // Function Python is pythonsql : i case in-sensitive change only first
    console.log(text4.replace(/python/g, "Function"))    // Function Python is Functionsql : g global change
    console.log(text4.replace(/python/ig, "Function"))   // Function Function is Functionsql : ig everywhere change
    console.log(text4.replaceAll("python", "Function"))  // Function Python is Functionsql  (i & g not work for replaceAll)

    let text5 = "Apple Mango Banana Orange";
    let ans= text5.split(" ")   // convert in array form
    console.log(ans)        // [ 'Apple', 'Mango', 'Banana', 'Orange' ]
    console.log(typeof(ans))    // object
    console.log(typeof(text5))    // string

// TEMPLATE LITERALS (BACKTICK) : It supports single qoutes('') and double qoutes ("")
    let str1 = `this "BACKTICK SYMBOL" support
    'NEXT LINE' string`;
    console.log(str1);
    
    let ans1=parseInt(prompt("enter no. 1"))
    let ans2=parseInt(prompt("enter no. 2"))
    alert("the sum of " + ans1 + " and " + ans2 + " is " + (ans1+ans2))  // the sum of 7 and 7 is 14 
    alert (`The sum of ${ans1} and ${ans2} is ${ans1+ans2}`)        // The sum of 7 and 7 is 14

    let str2 = "end line <br> end start";
    document.write("<h1>" + str2 + "</h1>"); 
}
string(); 

JS Test Solution
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<p id="text">Hello, World!</p>
<button onclick="okk()">Change Text</button>

<p id="num">0</p>
<button onclick="add()">Increase</button>
<button onclick="sub()">Decrease</button>
<button onclick="reset()">Reset</button>

    <script src="test.js"></script>
</body>
</html>

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
// Display the number in a <p> tag
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
// Print the table from 1 to 10 in the browser.
let num = prompt("Enter number for table print")
for (let i =1; i<=10; ++i){
    let ans = num*i;
    document.write(ans+ " ");
}


Arrays in JS


function arrays(){
    let fruits = ["Apple", "Mango" , "Banana", "Grapes"] ;
    console.log(fruits.length);     // 4
    fruits.pop();       // remove last element from array
    fruits.pop();
    console.log(fruits);    // [ 'Apple', 'Mango' ]
    console.log(fruits.length);      // 2

    fruits.shift();     // remove starting element from array
    fruits.shift();
    console.log(fruits);    // [ 'Banana', 'Grapes' ]

    fruits.push("Orange", "Pineapple");     // add extra element at last from array
    console.log(fruits);        // [ 'Apple', 'Mango', 'Banana', 'Grapes', 'Orange', 'Pineapple' ]
    console.log(fruits.length);      // 6
    fruits.unshift("Papaya", "Kiwi");      // add extra element at start from array   
    console.log(fruits);        // [  'Papaya', 'Kiwi', 'Apple', 'Mango', 'Banana', 'Grapes', 'Orange', 'Pineapple' ]
    console.log(fruits.length);      // 8
    
    let arr=[4,32,61,1,2,9]
    let ans= arr.sort()
    console.log(ans)         // [ 1, 2, 32, 4, 61, 9 ] : ascending order by only first digit

    let ans= arr.reverse()     // [ 9, 2, 1, 61, 32, 4 ] : reverse of Array
    console.log(ans)

    let ans= arr.sort().reverse()    
    console.log(ans)           // [ 9, 61, 4, 32, 2, 1 ] : discending order by first digit only

    let ans= arr.sort((a,b)=>a-b)      // [ 1, 2, 4, 9, 32, 61 ] : ascending order perfectly
    let ans= arr.sort((a,b)=>b-a)      // [ 61, 32, 9, 4, 2, 1 ] : discending order perfectly     
    console.log(ans)            
    console.log(arr)            // [ 61, 32, 9, 4, 2, 1 ] : change original array

    let arr2= [5,7,8]
    let ans= arr.concat(arr2)      
    console.log(ans)               // [ 4, 32, 61, 1, 2, 9,  5,  7, 8 ]
    ans.sort((a,b)=>a-b)           
    console.log(ans)               // [ 1, 2,  4,  5, 7, 8, 9, 32, 61 ]
}
arrays();

function clickme(){
    let show = document.getElementById("text")
    let show = document.querySelector("#text")      // function call not work
    show.textContent="It's Coming";
    show.innerHTML= "<h1> Its Come </h1>";
    show.style.color="red";

    let a= [2,5,9,7,3,1, 81, 6]
    let ans = a.slice(2)
    console.log(ans)              // [ 9, 7, 3, 1, 81, 6]
    console.log(a)              // [ 2, 5, 9, 7, 3, 1, 81, 6] : not change original array
    ans = a.slice(3,5)      // give all except last elements remove
    console.log(ans)              // [ 7, 3]
    a.splice(2,3,20,17,18); // 3 parameters : from which index to add, how many to delete, what to add 
    console.log(a);                 // [ 2, 5, 20, 17, 18, 1, 81,  6 ] change original array
  
}
clickme();

// FUNCTION 
function myFunction(){  
    console.log("Hello World!");   
}
myFunction();           // Hello World! : first time
myFunction();           // Hello World! : second time

function myFunction(msg){       // parameter -> input
    console.log(msg);     // I love JS
}
myFunction("I love JS");        // argument (multiple values)

// // Function -> 2 numbers, sum
function sum1(x,y) {
    console.log(x+y);
}
sum1(5,6);       // 11
sum1(7,11);       // 18

function sum2(x,y) {
    s=x+y;
    console.log(x);         // 4 : // parameter -> input : like local variables of function -> block scope of       function
    return s;       // only return one value & after return nothing exicute
}
let val = sum2(5,6);       // 11
console.log(val);           // use anywhere by storing in variable    
console.log(sum2(4,6))         // 10

// ARROW FUNCTION  
let arrowSum = (a, b) => {       // store as variable
    console.log(a+b); 
}
arrowSum(4,3)       // 7

let arrowMul = (a,b) => {
    return a*b;
}
console.log(arrowMul(4,3))      // 12

const print = ()=> {console.log("Hello World")};        // arrow function is the short way to write a function
print();        // Hello World

    let arrow=(a,b)=>{
        return document.write(a*b)  // 30 : i/p value in html
    }
    let arrows=(a)=>{
        return document.write("हैलो " + a + " कुशवहा")  // हैलो HIMANSHU कुशवहा
    }

// Que : By function takes a string as an argument & returns the number of vowels in the string.
function countVowels(str){
    let count = 0;
    for (let char of str) {
        if (char==="a" || char==="e" || char==="i" || char==="o" || char==="u" ) {
            count ++ ;
        }
    }
    console.log(count);
}
countVowels("Hello World");       // 3

// By arrow function 
let countVow = (str) => {
    let count = 0;
    for (let char of str) {
        if (char==="a" || char==="e" || char==="i" || char==="o" || char==="u" ) {
            count ++ ;
        }
    }
    console.log(count);
}
countVow("Hello")           // 2

// * Higher Order Function/Methods in JS are method that take another function as a parameter inside them or they return another function as their output.
// * A callback is a function passed as an argument to another function.

// forEach LOOP IN ARRAYS (Higher Order Function/Methods) 
// arr.forEach( callBackFunction )
// (callBackFunction: Here, it is a function to execute for each element in the array)
    let array = [1,2,3,4,5];
    array.forEach(function(val){       // in form of function
        console.log(val);       // 1    2   3   4   5
    })

    let arr = ["pune", "delhi", "mumbai"] ;     
    arr.forEach((val)=>{              // Generally forEach use as arrow function
        console.log(val.toUpperCase());
    })

    arr.forEach((val, idx, arr) => {        // we can use 3 parameters that's are optional
        console.log(val.toUpperCase(), idx, arr);
        console.log(typeof(val))        // string
    });     // PUNE 0 [ 'pune', 'delhi', 'mumbai' ]
            // DELHI 1 [ 'pune', 'delhi', 'mumbai' ]
            // MUMBAI 2 [ 'pune', 'delhi', 'mumbai' ]
        console.log(typeof(val))        // undefined because parameters are block scope of function

// Que: print square of each value using forEach loop.
let arr=[4,7,2,5,9,1] 
let ans1 = arr.forEach((num)=>{          // original array not change
    let num1=num**2 // or (num*num)
    console.log(num1)       // 16 49 4 25 81 1
    console.log(typeof(num1))   // number
})
// or we can callBack like this also:
let ans2 = (num)=>{          // original array not change
    let num1=num**2 // or (num*num)
    console.log(num1)       // 16 49 4 25 81 1
    console.log(typeof(num1))   // number
}
arr.forEach(ans2);

// MAP
    // arr.map(callbackFnx)
    let arr=[4,7,2,5,9,1] 
    let newArr = arr.map((val) => {
        return val * 2;
    });
    console.log(newArr)         // [ 8, 14, 4, 10, 18, 2 ]
    let ans = arr.map((num)=> num*2)        
    console.log(ans);       // [ 8, 14, 4, 10, 18, 2 ]
    console.log(arr);       // [ 4, 7, 2, 5, 9, 1 ] : original array not change
    // or (in form of function)
    let ans= arr.map(function(num) {        
        return num*2;            // callback function
    })
    console.log(ans)          // [ 8, 14, 4, 10, 18, 2 ]

// FILTER
    let arr=[4,7,2,5,9,1] 
    let ans=arr.filter((num)=>num%2!==0)      // operation perform
    console.log(ans)            // [ 7, 5, 9, 1 ]
    console.log(arr)            // [ 4, 7, 2, 5, 9, 1 ] : original array not change
    console.log(typeof(ans))      // object

// REDUCE Method: returns single value of array
    let arr=[4,7,2,5,9,1] 
    let output=arr.reduce((pre, cur) => {
        // return pre+cur;          // 28: sum
        return pre > cur ? pre : cur ;      // 9: largest number 
    })
    console.log(output);        

    // Que: Take a number n as input from user. Create an array of numbers from 1 to n. by reduce method calculate sum and factorial in the array
    let n = prompt("enter a number : ");
    let arr = [] ;
    for (let i=1; i<=n; i++) {
        arr[i-1] = i;
    }
    console.log(arr);

    let sum = arr.reduce((pre, cur) => {
        return pre + cur ;
    })
    console.log("sum = ", sum);

    let factorial = arr.reduce((pre, cur) => {
        return pre * cur ;
    })
    console.log("factorial = ", factorial);

// for..of FUNCTION
    for(let num of arr) {         // string return & original array not change
        let num1=num*2
        console.log(num1)       // 8 14 4 10 18 2
        console.log(typeof(num1))   // number  
    }

Practice Set 2

    let que=()=>{
        // Question 1: Greet the User
            // Use a prompt to ask the user for their name. Display an alert that says, "Hello, [Name]!" using their input.
        let name = prompt("Enter Your Name");
        alert ("Hello, " + name + "!")
    
        // Question 2: Confirm to Show Message
            // Ask the user: "Do you like JavaScript?" using confirm. If they click OK, show an alert with "That's great!". If they click Cancel, show an alert with "No worries, keep learning!".
        let user = confirm("Do you like JavaScript");
        (user == true) ? alert("That's great!") : alert("No worries, keep learning!") ;
    
        // Question 3: Replace Text
            // You have a string: "JavaScript is easy. I love javaScript!" Replace "JavaScript" with "Coding" globally. Display the new string using an alert.
        let str= "Javascript is easy. I love javascript";
        let string = confirm(str);
        if(string==true) {
            let update = str.replace(/javaScript/ig, "Coding")
            alert(update)
        }
        else {
            alert(str)
        } 
    
        // Question 4: Count Numbers
            // Write a for loop to print numbers from 1 to 10 in the console.
        for (let n=1; n<=10; ++n){
            console.log(n);
        }
    
        // Question 5:
        // Use a prompt to ask the user to enter 3 favorite fruits one by one. Store them in an array. Display the array in an alert: "Your favorite fruits are: [fruit1, fruit2, fruit3]".
        let arr = [];
        let str = null;
        for (let i=1; i<=3; ++i){
            str = prompt("Enter Your Favourite Fruits");
            arr.push(str);
        }
        alert(`Your favourite fruits are : [ ${arr} ]`);
        console.log(arr)
        console.log(typeof(arr))         // object
        console.log(typeof(str))         // string
    
        // Question 6: Sum of Numbers in an Array
            // Create an array of numbers: [10, 20, 30, 40, 50].
            // Use a loop to calculate the sum of all the numbers in the array.
            // Display the result using an alert. 
        let num = [10, 20, 30, 40, 50];
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += num[i];
        }
        alert("The sum of the numbers in the array is: " + sum);
    
        // Question 7: Filter Even Numbers
            // Use a prompt to ask the user to enter 5 numbers one by one.. Store them in an array. Use the filter() method to find all the even numbers. Display the even numbers in an alert.
        let num=null;
        let arr=[];
        console.log(typeof(num)) ;        // object : (primitive data type)
            for (let i=1; i<=5; ++i){
                num=prompt(`Enter ${i} Number`);
                arr.push(num);
            }
            let filter = arr.filter((n)=> n%2==0)
            alert("Even Numbers are : " + filter);
            console.log("Even Numbers are : " + filter) ;
            console.log(typeof(filter)) ;        // object
            console.log(typeof(num)) ;        // string
    
        // Question 8: Replace and Uppercase
            // You have a string: "html is easy. html is fun!". Replace "html" with "CSS" globally and convert the entire string to uppercase. Show the final string in an alert.
            let text= "html is easy. html is fun!";
            let string = confirm(text);
            if(string==true){
                let str=text.replace(/html/ig, "css").toUpperCase();
                alert(str);
            }
            else{
                alert(text);
            }
    
        // Question 9: Multiplication Table
            // Ask the user to enter a number using prompt. Use a for loop to display the multiplication table for that number (from 1 to 10). Display the result in the console or with alert  (e.g., "5 x 1 = 5").
        let num = prompt("Enter Number to Pring Table");
        for (let i=1; i<=10; ++i){
            console.log(num*i);             // table print
            console.log(typeof(num*i))       // number
        }
    }
    que();

    // let arr = [Himanshu, 22, Rewa];      in array keys are not defined


OBJECT

// OBJECT: for key value pairs
let obj={
    name:"Himanshu",
    age:25,
    city:"Bhopal",
    name:"Him" ,     // same key will overwrite upper-one

    welcome: function(){
        console.log(`Welcome ${this.name} to ${this.city} home`);
    },
    fruits:["Apple", "Mango", "Banana"]

}
obj.welcome();  // to call a function
console.log(obj.fruits[1]);
console.log(arr[1]);    // array access
console.log(obj.name);  // object access

obj.email="himanshukushwahabkp@gmail.com";      // to insert data from outside
console.log(obj);   // to see updated object

delete obj.city;    // to delete data by key.name
console.log(obj);

obj.welcome();      // to call a function

// Destructuring of Objects
const student={name:"Himanshu", age:22, city:"Rewa"};
const {name, age}=student;
console.log(name);      // Himanshu
console.log(age);       // 22

// Spread Operator
const student1 = {name:"Himanshu", age:25, Marks:80};
const student2 = {city:"Rewa", grade:"A",Marks:90}
const combinedStdent = {...student1, ...student2};
console.log(combinedStdent);        //// { name: 'Himanshu', age: 25, Marks: 90, city: 'Rewa', grade: 'A' }


const arr1 = ["Himanshu", 25]
const arr2 = ["Rewa", "A"]
const combined = [...arr1, ...arr2];
console.log(combined);          // [ 'Himanshu', 25, 'Rewa', 'A' ]

const array1=[1,2,3];
const combinedArray=[0, ...array1, 4];
console.log(combinedArray);     // [ 0, 1, 2, 3, 4 ]




Questions Homework

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="hw.css">
    <!-- External CSS file linked for styling -->
</head>
<body>
    <!-- Que 1 - Buttons to change box background color and display text -->
    <div onclick="box()" class="box">box</div>
    <div class="button">
        <button onclick="red()">For Red</button>
        <button onclick="green()">For Green</button>
        <button onclick="blue()">For Blue</button>
    </div>
    
    <!-- Que 2 - Changing background images of the box when clicked -->
    <div id="box"></div>
    <div id="div">
        <div onclick="div1()" class="div1"></div>
        <div onclick="div2()" class="div2"></div>
        <div onclick="div3()" class="div3"></div>
    </div>

    <!-- Changing properties of #box2 with hover -->
    <!-- When mouse enters, box will rotate and change color, on mouse leave, it will reset -->
    <div onmouseenter="go()" id="box2" onmouseleave="back()"></div>

    <!-- Button that shows/hides the box when clicked -->
    <button onclick="go()">Hello Everyone</button>
    <div id="box">hello</div>
    

    <!-- Increase, Decrease, Reset font size with buttons -->
    <p id="num">Hello World!</p>
    <button onclick="add()">Increase</button>
    <button onclick="sub()">Decrease</button>
    <button onclick="reset()">Reset</button>

    <!-- Input box to take user input and show it in the paragraph -->
    <input type="text" name="" id="run">
    <button onclick="run()">Hello World!</button>
    <p id="par" ></p>

    <!-- External JavaScript file linked to implement functionality -->
    <script src="hw.js"></script>

</body>
</html>

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

Pure Event
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            height: 300px;
            width: 300px;
        }
    </style>
</head>
<body>
    <!-- Button that changes text and gets disabled on hover -->
    <button id="btn1">Click Me!</button>

    <!-- Input field to type text -->
    <input type="text" id="inp">
    <!-- Paragraph to show live input -->
    <P id="show"></P>

    <!-- Box to change color on hover -->
    <div class="box"></div><br>

    <!-- Color change buttons -->
    <button id="red">Red</button>
    <button id="yellow">Yellow</button>
    <button id="green">Green</button><br><br>

    <!-- Hide/show text on button click -->
    <button id="btn">Hide</button>
    <p id="par">Hello JavaScript!</p>


    <script src="pureEvent.js"></script>
</body>
</html>

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

Set Time Out, Set Interval
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Timer Example</title>
    <style>
        /* Styling for the div elements */
        div {
            height: 300px;
            width: 300px;
            background-color: aquamarine;  /* Light blue color */
        }
    </style>
</head>
<body>
    <!-- Button to trigger a function that will be defined in JavaScript -->
    <button onclick="startt()">click</button>

    <!-- A div with id "click" that can be targeted and manipulated in JavaScript -->
    <div id="click"></div>

    <!-- Button to trigger a function that changes the background color of the "click" div -->
    <button onclick="okk()">Click Me!</button>

    <!-- Button to start a counter that will decrease over time -->
    <button onclick="inc()">clickey</button>
    <p id="increase">Hello Himanshu</p> <!-- Paragraph to display the counter -->

    <!-- A div with id "target" for showing the counter -->
    <div id="target"></div>

    <!-- Paragraph with id "text" for dynamic text manipulation -->
    <p id="text"></p>

    <!-- Input field to input a number for a countdown timer -->
    <input id="inp" type="number">

    <!-- Button to start the countdown timer based on the number entered -->
    <button onclick="run()">Start</button>

    <!-- Header to display the countdown number -->
    <h1 id="num"></h1>
    
    <!-- Link to the external JavaScript file that handles the functionality -->
    <script src="settimeout.js"></script>
</body>
</html>

// JavaScript SetTimeout & SetInterval Notes
// setTimeout(): Executes code after a specified delay (once).
// setInterval(): Executes code at regular intervals (repeatedly).
// clearInterval(): Stops the execution of setInterval().
// ---------------------------------------------------------------------------------------------------
// **1. Synchronous vs Asynchronous Behavior in JavaScript**:
// JavaScript is traditionally a synchronous language, meaning code runs in sequence.
// However, JavaScript provides mechanisms like `setTimeout()` and `setInterval()` that make it behave asynchronously,
// allowing you to run code after a delay or repeatedly at intervals.

// ---------------------------------------------------------------------------------------------------
// **2. `setTimeout()` Function**:
// Purpose: Used to execute a piece of code after a specified delay (in milliseconds).
// Syntax:
// setTimeout(callback, delay);
//   - `callback`: The function to be executed after the delay.
//   - `delay`: The time in milliseconds to wait before executing the function.

// Example of using `setTimeout`:
startt = () => {
    setTimeout(() => {
        console.log("I am running");  // Runs after 3 seconds
    }, 3000);
}

console.log("Starting");
setTimeout(() => {
    console.log("I am running");  // Delay after 3 seconds
}, 3000);

console.log("Ending");

// Output: 
// Starting
// Ending
// I am running

// Explanation: Even though `setTimeout` is called after "Starting", the message "I am running" will only log after 3 seconds.

// ---------------------------------------------------------------------------------------------------
// **3. `setInterval()` Function**:
// Purpose: Used to repeatedly execute a piece of code at regular intervals (in milliseconds).
// Syntax:
// setInterval(callback, interval);
//   - `callback`: The function to be executed every interval.
//   - `interval`: The time in milliseconds between each execution of the function.

// Example of using `setInterval`:
startt = () => {
    setInterval(() => {
        console.log("I am running");  // Repeats every 1 second
    }, 1000);
}

let okk = () => {
    setInterval(() => {
        let show = document.querySelector("#click");
        show.style.backgroundColor = "red";  // Change background color every 1 second
    }, 1000);
}

// ---------------------------------------------------------------------------------------------------
// **4. Using `setInterval()` with a Counter**:
// Example: Incrementing or decrementing a counter at regular intervals:

let counter = 10;

let inc = () => {
    setInterval(() => {
        let show = document.querySelector("#increase");
        show.innerHTML = counter;  // Display the counter
        counter--;  // Decrease the counter each time the interval runs
    }, 1000);
}

// This shows a countdown on the page every second, decrementing the counter value.

// ---------------------------------------------------------------------------------------------------
// **5. Clearing an Interval with `clearInterval()`**:
// Purpose: Stops the repeated execution of code initiated by `setInterval()`.
// Example of clearing an interval:
let enter = setInterval(() => {
    console.log("Running");
}, 1000);

let startt = () => {
    clearInterval(enter);  // Stops the interval
}

// Example with counter:
let counter = 0;
let enter = setInterval(() => {
    console.log("Running");
    counter++;
    if (counter >= 6) {
        clearInterval(enter);  // Stop after 6 iterations
    }
}, 1000);

// ---------------------------------------------------------------------------------------------------
// **6. `setTimeout()` + `setInterval()` Example (Stopping an Interval)**:
// Example: Use `setInterval()` to execute code at intervals and then clear it after a certain period using `setTimeout()`.

let target = document.querySelector("#target");
let counter = 1;
let show = setInterval(() => {
    target.innerHTML = counter++;  // Increment counter every second
}, 1000);

setTimeout(() => {
    clearInterval(show);  // Stop the interval after 6 seconds
}, 6000);

// ---------------------------------------------------------------------------------------------------
// **7. Toggle Document Title Using `setInterval()`**:
// Purpose: Changing the document's title every second (toggle between two names).

let isname = true;
setInterval(() => {
    document.title = isname ? "Himanshu" : "Kushwaha";  // Toggle title every second
    isname = !isname;  // Alternate between true/false
}, 1000);

// ---------------------------------------------------------------------------------------------------
// **8. Breaking Condition in `setInterval()`**:
// Purpose: Stop the `setInterval()` when a condition is met.

let target = document.querySelector("#target");
let counter = 10;
let show = setInterval(() => {
    target.innerHTML = counter--;  // Display counter value
    if (counter == 0) {
        clearInterval(show);  // Stop the interval when counter reaches 0
    }
}, 500);

// ---------------------------------------------------------------------------------------------------
// **9. Stopwatch with `setInterval()`**:
// Purpose: Create a countdown timer (stopwatch) using an input value and decrease it every second.

let run = () => {
    let inp = document.querySelector("#inp").value;  // Get input value
    let enter = setInterval(() => {
        let display = document.querySelector("#num");
        display.innerHTML = inp;  // Show the input value in the display
        inp--;  // Decrease the input value
        if (inp == 0) {
            clearInterval(enter);  // Stop when it reaches 0
        }
    }, 1000);
}

Array of Object, Form Dynamically,
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Table</title>
</head>
<body>
    <!-- This is the table where student data will be shown -->
    <table border="2">
        <thead>
            <!-- This is the header row with column names -->
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>
        </thead>
        <!-- This is the part of the table where rows will be added by JavaScript -->
        <tbody id="tablebox">
        </tbody>
    </table>

    <!-- This links the JavaScript file to the HTML -->
    <script src="doubt.js"></script>
</body>
</html>


    <!-- This links the JavaScript file to the HTML -->
    <script src="doubt.js"></script>
</body>
</html>

// We use this approach to dynamically add data to a webpage.
// This is the list of students with their details
let students = [
    { name: "Himanshu", age: 22, city: "Rewa" }, // First student's details
    { name: "Jatin", age: 23, city: "Sehore" },  // Second student's details
    { name: "Vijay", age: 24, city: "Dewas" }  // Third student's details
];

// This gets the empty part of the table (where rows will go)
let output = document.querySelector("#tablebox");

// This goes through each student in the list
students.forEach((e) => {
    // For each student, it adds a new row in the table
    output.innerHTML += `
        <tr>
            <td>${e.name}</td> <!-- This adds the student's name -->
            <td>${e.age}</td>  <!-- This adds the student's age -->
            <td>${e.city}</td> <!-- This adds the student's city -->
        </tr>
    `;
});

Types of Function

// Array of students with details
let students = [
    { name: "Himanshu", age: 22, city: "Rewa" },
    { name: "Jatin", age: 23, city: "Sehore" },
    { name: "Vijay", age: 24, city: "Dewas" }
];

// Types of Function:- 
// Arrow Function with .map() Method:
// This is used to create a new array based on modifying the original array’s items.\
let updatedStudents = students.map((e) => {
    return { ...e, age: e.age + 1 };  // Create a new object with updated age (add 1 to the age)
});
console.log(updatedStudents);  // Output the new array with updated ages


// Arrow Function with .filter() Method:
// This is used to create a new array containing only the items that meet certain conditions. 
let fill = students.filter((e) => {
    return e.age > 23;  // Only include students whose age is greater than 23
});
console.log(fill);  // Output the filtered array of students

// Regular function declaration:
// function using the function keyword, and it can be used anywhere after it’s declared.
function num() {
    console.log("This is a regular function");
}
num();  // Call the function

// Arrow function expression:
// An arrow function is a more concise version of a regular function. It's often used for shorter functions.
let num2 = () => {
    console.log("This is an arrow function");
}
num2();  // Call the function

// Anonymous Function (Function Expression):
// An anonymous function has no name. It can be assigned to a variable and invoked.
let hii = function() {
    console.log("Anonymous function");
};
hii();  // Call the anonymous function

// Special Type of Anonymous Function (Arrow Function):
// This is still an anonymous function, but written using the arrow syntax, making it more concise.
let newarrow = () => {
    console.log("Arrow function as anonymous");
};
newarrow();  // Call the function

// IIFE (Immediately Invoked Function Expression):
// An IIFE is a function that is defined and immediately called.
(function() {
    console.log("IIFE function");  // It runs as soon as it's defined
})();


Form
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
    <style>
        /* Basic styling for error messages and inputs */
        input[type="text"], input[type="password"] {
            padding: 8px;
            margin: 5px;
            width: 250px;
            border-radius: 4px;
            border: 1px solid #ccc;
        }
        input[type="submit"] {
            padding: 10px 20px;
            margin-top: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
        p {
            color: red;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <form align="center">
        <!-- Name Input -->
        <p id="errorname"></p>
        Enter Name: <input type="text" id="inpname" required><br><br>

        <!-- Number Input -->
        <p id="errornum"></p>
        Enter Number: <input type="text" id="inpnum" required><br><br>

        <!-- Email Input -->
        <p id="erroremail"></p>
        Enter Email: <input type="text" id="inpemail" required><br><br>

        <!-- Password Input -->
        <p id="errorpass"></p>
        Enter Password: <input type="password" id="inppass" required><br><br>

        <!-- Confirm Password Input -->
        <p id="errorcpass"></p>
        Enter Confirm Password: <input type="password" id="inpcpass" required><br><br>

        <!-- Submit Button -->
        <input type="submit" value="Submit" onclick="return submitt()">
    </form>

    <script src="form.js"></script>
</body>
</html>

let submitt = () => {
    // Fetching input values from the form
    let name = document.querySelector("#inpname").value;
    let email = document.querySelector("#inpemail").value;
    let number = document.querySelector("#inpnum").value;
    let pass = document.querySelector("#inppass").value;
    let cpass = document.querySelector("#inpcpass").value;

    // Fetching error message elements for each input field
    let errname = document.querySelector("#errorname");
    let erremail = document.querySelector("#erroremail");
    let errnumber = document.querySelector("#errornum");
    let errpass = document.querySelector("#errorpass");
    let errcpass = document.querySelector("#errorcpass");

    // **1. Name validation**
    if (name === "") {
        let inpname = document.querySelector("#inpname");
        inpname.placeholder = "Not filled";  // Set placeholder to indicate missing input
        inpname.style.border = "2px solid red";  // Highlight the input field
        errname.innerHTML = "Please enter your name";  // Display error message
        errname.style.color = "red";
        errname.style.fontSize = "30px";
        return false;  // Stop the function execution and return false
    }

    // **2. Phone Number Validation**
    else if (number === "" || isNaN(number) || number.length !== 10) {
        errnumber.innerHTML = "Please enter a valid 10-digit number";
        errnumber.style.color = "red";
        return false;
    }

    // **3. Email Validation**
    else if (email === "") {
        erremail.innerHTML = "Please enter your email";
        erremail.style.color = "red";
        return false;
    }
    else if (!(email.includes("@") && email.includes(".com"))) {
        erremail.innerHTML = "Please enter a valid email ID";
        erremail.style.color = "red";
        return false;
    }

    // **4. Password Validation**
    else if (pass === "") {
        errpass.innerHTML = "Password is required";
        errpass.style.color = "red";
        return false;
    }
    else if (pass.length < 6) {
        errpass.innerHTML = "Password must be at least 6 characters long";
        errpass.style.color = "red";
        return false;
    }

    // **5. Confirm Password Validation**
    else if (cpass === "") {
        errcpass.innerHTML = "Confirm password is required";
        errcpass.style.color = "red";
        return false;
    }
    else if (cpass !== pass) {
        errcpass.innerHTML = "Passwords do not match";
        errcpass.style.color = "red";
        return false;
    }

    // **6. Password Strength Validation**
    else if (!(
        pass.match(/[0-9]/) &&  // Checks if the password contains a number
        pass.match(/[!@#$%^&*]/) &&  // Checks if the password contains a special symbol
        pass.match(/[a-z]/) &&  // Checks if the password contains lowercase letters
        pass.match(/[A-Z]/)  // Checks if the password contains uppercase letters
    )) {
        errpass.innerHTML = "Password should contain numbers, symbols, uppercase & lowercase letters";
        errpass.style.color = "red";
        return false;
    }

    // If all validations pass, return true to allow form submission
    return true;
}



Calculator
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <!-- Table structure for the calculator layout -->
    <table border="1" align="center" cellspacing="20px" cellpadding="10px">
        
        <!-- Display area to show the current calculation -->
        <tr>
            <td id="display" colspan="4"></td> <!-- This will show the calculation result -->
        </tr>

        <!-- Row for number buttons (1 to 4) -->
        <tr>
            <td onclick="cal('1')">1</td>
            <td onclick="cal('2')">2</td>
            <td onclick="cal('3')">3</td>
            <td onclick="cal('4')">4</td>
        </tr>

        <!-- Row for number buttons (5 to 8) -->
        <tr>
            <td onclick="cal('5')">5</td>
            <td onclick="cal('6')">6</td>
            <td onclick="cal('7')">7</td>
            <td onclick="cal('8')">8</td>
        </tr>
       
        <!-- Row for number buttons (9, 0, 00, and decimal point) -->
        <tr>
            <td onclick="cal('9')">9</td>
            <td onclick="cal('0')">0</td>
            <td onclick="cal('+')">+</td>
            <td onclick="cal('.')">.</td>
        </tr>

        <!-- Row for operation buttons (-, empty space, %, and division) -->
        <tr>
            <td onclick="cal('-')">-</td>
            <td onclick="cal('*')">*</td> 
            <td onclick="cal('%')">%</td>
            <td onclick="cal('/')">/</td>
        </tr>

        <!-- Row for function buttons (del, AC, =) -->
        <tr>
            <td onclick="del()">del</td> <!-- Deletes the last character -->
            <td onclick="ac()">AC</td> <!-- Clears the display -->
            <td onclick="result()">=</td> <!-- Displays the result -->
            <td onclick="sq()">x²</td> <!-- Square the number -->
        </tr>
    </table>
    <!-- JavaScript file for calculator logic -->
    <script src="calci.js"></script>
</body>
</html>


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


Date & Time, Alarm

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date and Age Example</title>
</head>
<body>
    <!-- Button to display the current day -->
    <button onclick="timee()">Click Me!</button>
    <!-- This paragraph will display the day name -->
    <p id="target"></p>

    <!-- Input box to enter your birth year -->
    <input type="text" id="text">
    <!-- Button to calculate age -->
    <button onclick="age()">Age</button>
    <!-- This paragraph will display the calculated age -->
    <p id="totalAge"></p>
    <!-- Digital Clock -->
    <h1 id="display"></h1> <!-- Displays the digital clock -->
    <h1 id="time"></h1> <!-- Displays the current time -->

    <!-- Alarm Functionality  -->
    <h1 id="time"></h1>  <!-- Heading to display the current time -->
    <input type="time" id="alarm">  <!-- Input field for setting the alarm time -->
    <button onclick="setAlarm()">Set Alarm</button>  <!-- Button to trigger the setAlarm function -->
    <h1 id="message"></h1>  <!-- Heading to show alarm messages -->
    <audio src="audio.mp3" id="ring"></audio>  <!-- Audio element to play the alarm sound -->

    <!-- Link to the JavaScript file -->
    <script src="date.js"></script>
</body>
</html>

// Get the current date and time
let time = new Date();
console.log(time.toLocaleString()); // Logs the current date and time in a readable format

// Extract specific parts of the date
let time1 = time.getFullYear();       // Gets the current year
let time2 = time.getMonth();          // Gets the current month (0-11)
let time3 = time.getDay();            // Gets the day of the week (0-6)
let time4 = time.getHours();          // Gets the current hour
let time5 = time.getMinutes();        // Gets the current minutes
let time6 = time.getSeconds();        // Gets the current seconds
let time7 = time.getMilliseconds();   // Gets the current milliseconds
console.log(time7); // Logs the milliseconds

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
                show.innerHTML = "Stop Alarm";  // Update the message to indicate the alarm has stopped
            }, 6000);  // Stop the alarm sound after 6 seconds
        }
    }, 1000);  // Check the time every second
};


Math Function

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


Dice Mini Project

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dice</title>
    <link rel="stylesheet" href="dice.css">
</head>
<body>
    <h1>Play Dice</h1>

    <div id="box1">
        <div></div>
    </div>
    <div id="box2">
        <div></div>
        <div></div>
    </div>
    <div id="box3">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div id="box4">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div id="box5">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
    </div>
    <div id="box6">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>

    <button onclick="roll()">Roll</button>
    <script src="dice.js"></script>
</body>
</html>

button{
    width: 200px;
    height: 100px;
    background-color: tomato;
    cursor: pointer;
    position: absolute;
    left: 35%;
    bottom: 20%;
}
#box1{
    width: 300px;
    height: 300px;
    border: 1px solid black;
    position: absolute;
    top: 20%;
    left: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aquamarine;
    gap: 20%;
    opacity: 0;

}

#box1 div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: green;
}
#box2{
    width: 300px;
    height: 300px;
    border: 1px solid black;
    position: absolute;
    top: 20%;
    left: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aquamarine;
    gap: 20%;
    opacity: 0;
}

#box2 div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: green;
}
#box3{
    width: 300px;
    height: 300px;
    border: 1px solid black;
    position: absolute;
    top: 20%;
    left: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: aquamarine;
    gap: 20%;
    opacity: 0;
}

#box3 div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: green;
}
#box4{
    width: 300px;
    height: 300px;
    border: 1px solid black;
    position: absolute;
    top: 20%;
    left: 30%;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    background-color: aquamarine;
    gap: 20%;
    opacity: 0;
}

#box4 div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: green;
}
#box5{
    width: 300px;
    height: 300px;
    border: 1px solid black;
    position: absolute;
    top: 20%;
    left: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: aquamarine;
    gap: 20%;
    opacity: 0;
}

#box5 div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: green;
}
#box6{
    width: 300px;
    height: 300px;
    border: 1px solid black;
    position: absolute;
    top: 20%;
    left: 30%;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    background-color: aquamarine;
    gap: 20%;
    opacity: 0;
}

#box6 div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: green;
}

//  Making Dice 
let roll=()=>{
    let dice=(Math.floor(Math.random()*6)+1)    // random number between 1 and 6
    console.log(dice);

    let box1=document.querySelector("#box1")
    let box2=document.querySelector("#box2")
    let box3=document.querySelector("#box3")
    let box4=document.querySelector("#box4")
    let box5=document.querySelector("#box5")
    let box6=document.querySelector("#box6")

    if(dice==1){
        box1.style.opacity=1;
        box2.style.opacity=0;
        box3.style.opacity=0;
        box4.style.opacity=0;
        box5.style.opacity=0;
        box6.style.opacity=0;
    }
    else if(dice==2){
        box1.style.opacity=0;
        box2.style.opacity=1;
        box3.style.opacity=0;
        box4.style.opacity=0;
        box5.style.opacity=0;
        box6.style.opacity=0;
    }
    else if(dice==3){
        box1.style.opacity=0;
        box2.style.opacity=0;
        box3.style.opacity=1;
        box4.style.opacity=0;
        box5.style.opacity=0;
        box6.style.opacity=0;
    }
    else if(dice==4){
        box1.style.opacity=0;
        box2.style.opacity=0;
        box3.style.opacity=0;
        box4.style.opacity=1;
        box5.style.opacity=0;
        box6.style.opacity=0;
    }
    else if(dice==5){
        box1.style.opacity=0;
        box2.style.opacity=0;
        box3.style.opacity=0;
        box4.style.opacity=0;
        box5.style.opacity=5;
        box6.style.opacity=0;
    }
    else if(dice==6){
        box1.style.opacity=0;
        box2.style.opacity=0;
        box3.style.opacity=0;
        box4.style.opacity=0;
        box5.style.opacity=0;
        box6.style.opacity=1;
    }
}


JAVA SCRIPT TEST 2
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Exam</title>
    <link rel="stylesheet" href="test.css">
</head>
<body>
    <!-- answer 3 -->
    <form>
    Enter Name: <input type="text" id="inpname">
    <p id="inpnam"></p>
    Enter Email: <input type="text" name="" id="inpemail">
    <p id="inpemai"></p>
    <input type="submit" onclick="return submitt()" >
</form>
<br><br><br>
<!-- answer 4 -->
    <div id="txt">Cybrom</div>
    <button onclick="show()" id="btn2">Hide</button>

<br><br><br>
<!-- answer 5 -->
    <div id="text">Hello</div>
    <button onclick="btn()">Button</button>
    <script src="test.js"></script>
</body>
</html>

// Q.1
// "Write a JavaScript program that prompts the user to enter a number and displays whether the number is positive, negative, zero, or if the input is invalid."
let show = prompt("Enter Number");
if(show>0){
    alert("Positive")
}
else if(show<0){
    alert("Negitive")
}
else if(show==0){
    alert("Zero")
}
else {
    alert("Wrong Input")
};

// Q.2
// Create an object user with properties name, age, and a method greet that displays: "Hello, my name is [name] and I am [age] years old." and show the output in console.
let obj={
    name: "Himanshu",
    age:22,
    greet: function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }

}
obj.greet();

// Q.3
// Create a simple HTML form with two input fields for name and email and a submit button.
// Write JavaScript to validate the form:
// Ensure the name field is not empty.
// Ensure the email field contains the @ symbol.
// Display appropriate error messages if validation fails.
let submitt=()=>{
let name= document.querySelector("#inpname").value;
let email= document.querySelector("#inpemail").value;

let namee= document.querySelector("#inpnam");
let emai= document.querySelector("#inpemai");
    if(name==""){
    namee.innerHTML="Wrong Input";
    return false;
    }

    else if(email==""){
    emai.innerHTML="Wrong Email"
        return false;
    }
    else if (!(email.includes("@"))){
        emai.innerHTML="Wrong"
        return false;
    }
}

// Q.4
// Create a div with the text "Name: Cybrom" and a button with the label "Hide".
// When the button is clicked:
// If the text is visible, it should vanish, and the button label should change to "Show".
// If the text is hidden, it should reappear, and the button label should change back to "Hide"."
let show=()=>{
    let txt= document.querySelector("#txt")
    let btn2= document.querySelector("#btn2")

    if(txt.style.display=="none"){
        txt.style.display="block";
        btn2.innerHTML="Hide";
    }
    else {
        txt.style.display="none";
        btn2.innerHTML="Show";
    }
}

// Q.5
// . Create a div that displays the text "Hello".
// Use setTimeout to: Change the text to "Welcome" after 2 seconds.
// Change it again to "Goodbye" after another 2 seconds.
// Finally, after 2 more seconds, remove the text completely.
let btn=()=>{
 let show = document.querySelector("#text")
    setTimeout(()=>{
    show.innerHTML="Welcome";
    }, 2000)
    setTimeout(()=>{
    show.innerHTML="GoodBye";
    }, 4000)
    setTimeout(()=>{
        show.innerHTML="";
    }, 6000)
}




Local Storage
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Local Storage</title>
</head>
<body>
    <button onclick="set()">set</button>
    <h1 id="data"></h1>
    <button onclick="remove()">remove</button>

    <br><br>
    Enter Name <input type="text" id="name"><br>
    Enter Age <input type="text" id="age"> 

    <button onclick="sett()">Set</button>
    <p id="show"></p>

    <script src="localStorage.js"></script>
</body>
</html>
// Function to set default values in localStorage
let set = () => {
    localStorage.setItem("Name", "Himanshu"); // Setting default name
    localStorage.setItem("Age", 22); // Setting default age
};

let show = document.querySelector("#data"); // // Select the HTML element to display stored information

let ans = localStorage.getItem("Name");     // Retrieve the stored name from localStorage
show.innerHTML = ans; // Show the name in the HTML

// Function to clear all data from localStorage
let remove = () => {
    localStorage.clear(); // Clear all stored data
};

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
show.innerHTML = `Hello ${name} and your age is ${age} Years`;     // Display message in the 'show' element.

