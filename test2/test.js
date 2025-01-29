// Q.1
// "Write a JavaScript program that prompts the user to enter a number and displays whether the number is positive, negative, zero, or if the input is invalid."
let show = prompt("Enter Number");
if(show>0){
    alert("Positive")
}
else if(show<0){
    alert("Negitive")
}
else if(show==0){
    alert("Zero")
}
else {
    alert("Wrong Input")
};

// Q.2
// Create an object user with properties name, age, and a method greet that displays: "Hello, my name is [name] and I am [age] years old." and show the output in console.
let obj={
    name: "Himanshu",
    age:22,
    greet: function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }

}
obj.greet();

// Q.3
// Create a simple HTML form with two input fields for name and email and a submit button.
// Write JavaScript to validate the form:
// Ensure the name field is not empty.
// Ensure the email field contains the @ symbol.
// Display appropriate error messages if validation fails.
let submitt=()=>{
let name= document.querySelector("#inpname").value;
let email= document.querySelector("#inpemail").value;

let namee= document.querySelector("#inpnam");
let emai= document.querySelector("#inpemai");
    if(name==""){
    namee.innerHTML="Wrong Input";
    return false;
    }

    else if(email==""){
    emai.innerHTML="Wrong Email"
        return false;
    }
    else if (!(email.includes("@"))){
        emai.innerHTML="Wrong"
        return false;
    }
}

// Q.4
// Create a div with the text "Name: Cybrom" and a button with the label "Hide".
// When the button is clicked:
// If the text is visible, it should vanish, and the button label should change to "Show".
// If the text is hidden, it should reappear, and the button label should change back to "Hide"."
let show=()=>{
    let txt= document.querySelector("#txt")
    let btn2= document.querySelector("#btn2")

    if(txt.style.display=="none"){
        txt.style.display="block";
        btn2.innerHTML="Hide";
    }
    else {
        txt.style.display="none";
        btn2.innerHTML="Show";
    }
}

// Q.5
// . Create a div that displays the text "Hello".
// Use setTimeout to: Change the text to "Welcome" after 2 seconds.
// Change it again to "Goodbye" after another 2 seconds.
// Finally, after 2 more seconds, remove the text completely.
let btn=()=>{
 let show = document.querySelector("#text")
    setTimeout(()=>{
    show.innerHTML="Welcome";
    }, 2000)
    setTimeout(()=>{
    show.innerHTML="GoodBye";
    }, 4000)
    setTimeout(()=>{
        show.innerHTML="";
    }, 6000)
}
