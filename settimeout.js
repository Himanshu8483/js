// As JS is a Syncronous language but Set time out behave JS as Asyncronous.
// Set Time Out : 
// startt=()=>{
//     setTimeout(()=>{
//         console.log("I am running");     // delay after 3 sec
//     }, 3000)
// }

// console.log("Starting")   
// setTimeout(()=>{
//     console.log("I am running")      // delay after 3 sec
// }, 3000)

// console.log("Ending");      

// let okk=()=>{
//     setTimeout(()=>{
//             let show= document.querySelector("#click");
//             show.style.backgroundColor="red";
//     }, 1000)
// }
// set interval 

// startt=()=>{
//     setInterval(()=>{
//         console.log("I am running");     // delay after 1 sec
//     }, 1000)
// }
// let okk=()=>{
//     setInterval(()=>{
//             let show= document.querySelector("#click");
//             show.style.backgroundColor="red";
//     }, 1000)
// }

// // let counter=0;       // Initialize a counter
// let counter=10;

// let inc=(()=>{
//     setInterval(()=>{
//         let show=document.querySelector("#increase")
//         show.innerHTML=counter;
//         // counter++;       // Increment the counter each time the callback runs
//         counter--;
//     }, 1000)
// })

// let enter=setInterval(()=>{
//     console.log("Running");
// }, 1000)
// let startt=()=>{
//     clearInterval(enter)        // stop 
// }

// let counter = 0; 
// let enter = setInterval(() => {
//     console.log("Running");
//     counter++; 

//     if (counter >= 6) { 
//         clearInterval(enter);
//     }
// }, 1000);

// // Set timeout and Auto Interval for a specific time and clear interval after reaching on a state 
// let target = document.querySelector("#target")
// let counter = 1;
// let show = setInterval(()=>{
//     target.innerHTML=counter++
// },1000)
// setTimeout(()=>{
//     clearInterval(show)
// },6000)

// let isname=true;
// setInterval(()=>{
//     let get = document.querySelector("#text")
//     document.title=isname?"Himanshu": "Kushwaha"        // to change title
//     // get.innerHTML=isname?"Himanshu": "Kushwaha"
//     // isname=!isname;
//     if(isname==true){
//         isname=false;
//     }
//     else {
//         isname=true;
//     }
// }, 1000)

// break condition at 1
let target = document.querySelector("#target")
let counter = 10;
let show = setInterval(()=>{
    
    target.innerHTML=counter--
    if(counter==0){
        clearInterval(show)
    }
},500)

// stop watch dynamic 
let run=(()=>{
    let inp=document.querySelector("#inp").value 
    let enter=setInterval(() => {
        let display=document.querySelector("#num")
            display.innerHTML=inp;
            inp--;
            if(inp==0){
                clearInterval(enter)
            }
    }, 1000);
})



