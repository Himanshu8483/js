let btn = document.querySelector("#btn1")

// btn.addEventListener("click", ()=>{      // or dblclick for work in double click
btn.addEventListener("mouseenter", ()=>{      // for hover
    // alert("Button Clicked")

    btn.innerHTML="Disable Button"
    console.log("clicked");
    btn.disabled=true;         // disable after use 
})

    // let inp=document.querySelector("#inp")
    // inp.addEventListener("keydown", (e)=>{
    //     console.log(e.key);
    // })

    // // input live print on page 
    // let inp=document.querySelector("#inp")
    // inp.addEventListener("input", ()=>{
    // let show=document.querySelector("#show")
    // show.innerHTML=inp.value
    // })

    let inp1=document.querySelector("#red")
    inp1.addEventListener("click", ()=>{
        let show=document.querySelector(".box")
        show.style.backgroundColor="red";
    })
    let inp2=document.querySelector("#yellow")
    inp2.addEventListener("click", ()=>{
        let show=document.querySelector(".box")
        show.style.backgroundColor="yellow";
    })
    let inp3=document.querySelector("#green")
    inp3.addEventListener("click", ()=>{
        let show=document.querySelector(".box")
        show.style.backgroundColor="green";
    })
