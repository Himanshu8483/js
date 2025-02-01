// =========Arrow Function==================
// let go=(a,b)=>{
    // return document.write(a*b)      // return function use for multi use
// }
// let go=(a)=>{
//     return document.write("हैलो " + a + " कुशवहा")
// }

let arr=[4,7,2,5,9,1] 
let ans1=arr.map((num)=> num*2)
console.log(ans1);

let go=()=>{
    let text=document.querySelector("#text")
    text.innerHTML="Hello Himanshu";
    text.style.color="red";
 
}