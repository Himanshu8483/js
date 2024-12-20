console.log("Hello there is \nHimanshu \t Kushwhaha\"s JS")       // \n : new line, \t: tab
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

// PRACTICE SET 1.
function loop(){ 
    // Question 1: Ask the user of their age and if it is greater than or equals to 18 with Ternary operator and display the result in alert.
    let age=prompt("Enter Age")
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

    // Question 10: Ask the user to enter a day of the week (1 for Monday, 2 for Tuesday, etc.) and display the name of the day. by Switch.
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

// ARRAYS
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

// ARROW FUNCTION   (use for small work) 
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

// PRACTICE SET 2. 
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
        // Use a prompt to ask the user to enter 3 favorite fruits one by one. Store them in an array. Display the array in an alert: "Your favorite fruits are: [fruit1, fruit2, fruit3]".
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
            // Ask the user to enter a number using prompt. Use a for loop to display the multiplication table for that number (from 1 to 10). Display the result in the console or with alert 	(e.g., "5 x 1 = 5").
        let num = prompt("Enter Number to Pring Table");
        for (let i=1; i<=10; ++i){
            console.log(num*i);             // table print
            console.log(typeof(num*i))       // number
        }
    }
    que();

    // let arr = [Himanshu, 22, Rewa];      in array keys are not defined

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
// console.log(arr[1]);    // array access
// console.log(obj.name);  // object access

// obj.email="himanshukushwahabkp@gmail.com";      // to insert data from outside
// console.log(obj);   // to see updated object

// delete obj.city;    // to delete data by key.name
// console.log(obj);

// obj.welcome();      // to call a function


// Destructuring of Objects
const student={name:"Himanshu", age:22, city:"Rewa"};
const {name, age}=student;
console.log(name);      // Himanshu
console.log(age);       // 22

// Spread Operator
const student1 = {name:"Himanshu", age:25, Marks:80};
const student2 = {city:"Rewa", grade:"A",Marks:90}
const combinedStdent = {...student1, ...student2};
console.log(combinedStdent);        // { name: 'Himanshu', age: 25, city: 'Rewa', grade: 'A' }


const arr1 = ["Himanshu", 25]
const arr2 = ["Rewa", "A"]
const combined = [...arr1, ...arr2];
console.log(combined);          // [ 'Himanshu', 25, 'Rewa', 'A' ]

const array1=[1,2,3];
const combinedArray=[0, ...array1, 4];
console.log(combinedArray);     // [ 0, 1, 2, 3, 4 ]
