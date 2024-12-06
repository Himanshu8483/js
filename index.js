// 04 dec 
// var num1 =55;
// var num2=66;
// console.log("Sum of num1 & num2 = " + (num1+num2))

// function okk(){
//     var pera=document.querySelector("#name")
//     pera.innerHTML="Hello Jatin";
//     pera.style.color="red"
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
