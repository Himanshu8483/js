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
    let inp=document.querySelector("#inp")
    inp.addEventListener("input", ()=>{
    let show=document.querySelector("#show")
    show.innerHTML=inp.value
    })

    let inp1=document.querySelector("#red")
    inp1.addEventListener("mouseenter", ()=>{
        let show=document.querySelector(".box")
        show.style.backgroundColor="red";
    })
    inp1.addEventListener("mouseleave", ()=>{
        let show=document.querySelector(".box")
        show.style.backgroundColor="aqua";  
    })
    let inp2=document.querySelector("#yellow")
    inp2.addEventListener("mouseenter", ()=>{
        let show=document.querySelector(".box")
        show.style.backgroundColor="yellow";
    })
    let inp3=document.querySelector("#green")
    inp3.addEventListener("mouseenter", ()=>{
        let show=document.querySelector(".box")
        show.style.backgroundColor="green";
    })

    // question home =======
    let button=document.querySelector("#btn")
    button.addEventListener("click", ()=>{
        let div=document.querySelector("#par")
        if(div.style.display=="none"){
            div.style.display="block";
        button.innerHTML="hide";


        }
        else{
            div.style.display="none";
            button.innerHTML="show";
        }
        
    })

