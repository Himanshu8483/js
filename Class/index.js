
// 'use strict'    

var num1=56;
console.log(num1)

num3=77;
console.log(num3)

var a=55;
console.log(a)
console.log(typeof(a))

var b="1";
console.log(typeof(b))
var c=true;
console.log(typeof(c))
var d;
console.log(typeof(d))
var e=null;
console.log(typeof(e))

var num=1n;
var num2=2n;
console.log(num + num2)
console.log(typeof(num))

var n =2 ;
var N ='3';
console.log(n + N); //string taken priority and concatinate for plus sign only and for other operatioh auto convert on numbers
console.log(n + parseInt(N)); // number taken priority
console.log(n - N);
console.log(n * N);
console.log(n / N);
console.log(n % N);



// 04 dec 
// var num1 =55;
// var num2=66;
// console.log("Sum of num1 & num2 = " + (num1+num2))

// function okk(){
//     var pera=document.querySelector("#name")
//     pera.innerHTML="Hello Jatin";
//     pera.style.color="red";
// }

// 05 dec 
function okk(){
    // var a=5;
    // var a= 6;      //redclare var allowed
    // console.log(a);

    // let a=5;        // redclare not allowed
    // let a= 6 ;

    // const a = 5;
    // const a = 6 ;       //redeclare not allowed

    // var a = 5;
    // a= 7;           //reassignment var allowed
    // console.log(a);

    // let a= 5;
    // a = 6;              // reassignment let allowed
    // console.log(a);

    // var a=5;

    // {
    //     var a= 6 ;
    //     console.log("block scope = " + a)
    // }

    // console.log("outer message = " + a)

    // let a=5;

    // {
    //     let a= 6 ;
    //     console.log("block scope = " + a)
    // }

    // console.log("outer message = " + a)

    const a=5;

    {
        const a= 6 ;
        console.log("block scope = " + a)
    }

    console.log("outer message = " + a)
}

function start () {
    console.log("Start Function Run")
}
start();    //runs first its written first
okk();      //after start function run
