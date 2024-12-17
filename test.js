function clickme(){
    let show = document.getElementById("text")
    // let show = document.querySelector("#text")      // function call not work
    show.textContent="It's Coming";
    show.innerHTML= "<h1> Its Come </h1>";
    show.style.color="red";
}