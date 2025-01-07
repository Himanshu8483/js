// let set=()=>{
//     localStorage.setItem("Name", "Himanshu")
//     localStorage.setItem("Age", 22)
// }

// let show= document.querySelector("#data")

// let ans=localStorage.getItem("Name")

// show.innerHTML=ans;
// let remove=()=>{
//     localStorage.clear()
// }

let sett=()=>{
    let inpname=document.querySelector("#name").value
    let inpage=document.querySelector("#age").value

    localStorage.setItem("Name", inpname);
    localStorage.setItem("Age", inpage)

    location.reload()
    // location.href="new/date.html"
}

let show=document.querySelector("#show")
let name=localStorage.getItem("Name")
let age = localStorage.getItem("Age")
show.innerHTML=`Hello ${name} and your age is ${age}`