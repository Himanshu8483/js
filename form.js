
let submitt=()=>{
      // Fetching input values
    let name=document.querySelector("#inpname").value;
    let email=document.querySelector("#inpemail").value;
    let number=document.querySelector("#inpnum").value;
    let pass=document.querySelector("#inppass").value;
    let cpass=document.querySelector("#inpcpass").value;

        // Fetching error message elements
    let errname=document.querySelector("#errorname");
    let erremail=document.querySelector("#erroremail");
    let errnumber=document.querySelector("#errornum");
    let errpass=document.querySelector("#errorpass");
    let errcpass=document.querySelector("#errorcpass");

      // Name validation
    if(name===""){
        let inpnum=document.querySelector("#inpname")
        inpnum.placeholder="Not filled";
        inpnum.style.border="2px solid red";
        errname.innerHTML="Please enter your name";
        errname.style.color="red";
        errname.style.fontSize="30px"
        return false;
    }
    
    // is not a number = "abc" // true => if condition run
    // is not a number = "123" // false => if condition not run
      // Number validation  
    else if (number==="" || isNaN(number) || number.length !== 10) {
        errnumber.innerHTML = "Please enter a valid 10-digit number";
        errnumber.style.color = "red";
        return false;
    }

     // Email validation
     else if(email===""){
        erremail.innerHTML="Please enter your email";
        return false;
    }
    // include check every value present in input 
    else if(!(email.includes("@") && email.includes(".com"))){
        erremail.innerHTML="please enter valid id"
        return false;
    }

       // Password validation
    else if(pass === "") {
        errpass.innerHTML = "Password is required";
        return false;
    } 
    else if(pass.length < 6 ) {
        errpass.innerHTML = "Password must be at least 6 characters";
        return false;
    }
        // Confirm password validation
        else if (cpass === "") {
            errcpass.innerHTML = "Confirm password is required";
            errcpass.style.color = "red";
            return false;
        } 
        else if (cpass !== pass) {
            errcpass.innerHTML = "Passwords do not match";
            errcpass.style.color = "red";
            return false;
        }
    // match check any value present in input will be true 
        else if (!(
            pass.match(/[1234567890]/) && 
            pass.match(/[!@#$%^&*]/) &&
            pass.match(/[a-z]/) &&
            pass.match(/[A-Z]/)

        )){
            errpass.innerHTML="Password should have num, symbol, capital & small letters";
            return false;
        }
    
}