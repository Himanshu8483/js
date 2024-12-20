// Que 1 
// let red=()=>{
//     let text=document.querySelector(".box")
//     text.innerHTML="Hello Himanshu";
//     text.style.background="red";
 
// }
// let green=()=>{
//     let text=document.querySelector(".box")
//     text.innerHTML="Hello Himanshu";
//     text.style.background="green";
 
// }
// let blue=()=>{
//     let text=document.querySelector(".box")
//     text.innerHTML="Hello Himanshu";
//     text.style.background="blue";
 
// }
// Que 2
// let div1=()=>{
//     let text=document.querySelector("#box")
//     text.style.backgroundImage = "url('img/car1.png')";
//     text.style.backgroundSize = "contain"; 
//     text.style.backgroundRepeat = "no-repeat"; 
//     text.style.backgroundPosition = "center"; 
// }
// let div2=()=>{
//     let text=document.querySelector("#box")
//     text.style.backgroundImage = "url('img/car2.png')";
//     text.style.backgroundSize = "contain"; 
//     text.style.backgroundRepeat = "no-repeat"; 
//     text.style.backgroundPosition = "center"; 
// }
// let div3=()=>{
//     let text=document.querySelector("#box")
//     text.style.backgroundImage = "url('img/car3.png')";
//     text.style.backgroundSize = "contain"; 
//     text.style.backgroundRepeat = "no-repeat"; 
//     text.style.backgroundPosition = "center"; 
// }

// ============
// let go=()=>{
//     let text=document.querySelector("#box2")
//     text.style.background="blue"
//     text.style.rotate="45deg";
//     // text.style.borderRadius="50%";
// }
// let back=()=>{
//     let text=document.querySelector("#box2")
//     text.style.background="yellow"
//     text.style.rotate="0deg";
//     text.style.borderRadius="0%";

// }
// =============
let go=()=>{
    let text=document.querySelector("#box")
    if(text.style.display=="none"){
        text.style.display="block"
    }
    else {
        text.style.display="none"
    }
}

// =============
let counter=16;
let add=()=>{
    let show= document.querySelector("#num");
    counter*=2;
    show.style.fontSize=counter+"px"
}

let sub=()=>{
    let show= document.querySelector("#num");
    if(counter>5){
    counter*2;
    show.style.fontSize=counter+"px"
    }

}
let reset=()=>{
    let show= document.querySelector("#num");
    counter=16;
    show.style.fontSize=counter+"px"
}

// ===================\
let run=()=>{
    let show=document.querySelector("#run").value;
    let give= document.querySelector("#par")
    give.innerHTML=show;
}