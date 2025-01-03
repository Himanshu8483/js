let current = () => {
    let show = document.querySelector("#time"); 
    let now = new Date(); 
    let time = now.toLocaleTimeString(); 
    show.innerHTML = `Current Time: ${time}`; 
};
setInterval(current, 1000); 

let setAlarm = () => {
    let alarmTime = document.querySelector("#alarm").value;     // 12:05
    let int= setInterval(()=>{
        let show = document.querySelector("#message"); 
    show.innerHTML = `Alarm set for ${alarmTime}`; 
        let time=new Date() // object
        time=`${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}`      // 12:5  // get hour => number

        if(alarmTime==time){
            show.innerHTML="Alarm Snoozing";
        document.querySelector("#ring").play();
            show.style.color="Red"

            setTimeout(()=>{
                document.querySelector("#ring").pause()
                clearInterval(int)
                show.innerHTML="Stop Alarm"
            },6000)
        }
    
     },1000)
};