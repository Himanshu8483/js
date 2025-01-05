let button = document.querySelector("#btn");
button.addEventListener("click", () => {
    let div = document.querySelector("#par");
    if (div.style.display == "none") {
        div.style.display = "block";  // Show the paragraph if it's hidden
        button.innerHTML = "Hide";    // Change button text to "Hide"
    } else {
        div.style.display = "none";   // Hide the paragraph if it's shown
        button.innerHTML = "Show";    // Change button text to "Show"
    }
});


let inp = document.querySelector("#inp");
inp.addEventListener("input", () => {
    let show = document.querySelector("#show");
    show.innerHTML = inp.value;           // Display the input value live in the paragraph
})
// document.querySelector("#inp").value returns a string, not a DOM element.
// You are trying to call addEventListener on a string, but only DOM elements (like an input field) have the addEventListener method.
let go = () => {
    let text = document.querySelector("#box");
    let btn = document.querySelector("#btnn");
    // Toggle visibility between 'block' (visible) and 'none' (hidden)
    if (text.style.display == "none") {
    btn.innerHTML="hide button";
        text.style.display = "block"; // Show the box
        
    } else {
        text.style.display = "none"; // Hide the box
    btn.innerHTML="show button";
    }
}

let isname = true;
setInterval(() => {
    document.title = isname ? "Himanshu" : "Kushwaha";  // Toggle title every second
    isname = !isname;  // Alternate between true/false
}, 1000);