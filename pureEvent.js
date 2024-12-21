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

    // input live print on page 
    let inp=document.querySelector("#inp")
    inp.addEventListener("input", ()=>{
    let show=document.querySelector("#show")
    show.innerHTML=inp.value
    })
