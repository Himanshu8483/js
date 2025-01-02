
let time= new Date();
console.log(time.toLocaleString());

let time1=time.getFullYear()    // year
let time2=time.getMonth()    // month
let time3=time.getDay()     // day
let time4=time.getHours()   // hour
let time5=time.getMinutes()     // minutes
let time6=time.getSeconds()     // second
let time7=time.getMilliseconds()
console.log(time7);

let timee = ()=> { 

    let show = document.querySelector("#target"); 
    let time= new Date(); 
// show.innerHTML= time.getFullYear();
show.innerHTML= time.getDay();
let arr=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday" ,"Friday", "Saturday"]
show.innerHTML= arr[time.getDay()]      // day name print
}
