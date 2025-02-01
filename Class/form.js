let submitt = () => {
    // Fetching input values from the form
    let name = document.querySelector("#inpname").value;
    let email = document.querySelector("#inpemail").value;
    let number = document.querySelector("#inpnum").value;
    let pass = document.querySelector("#inppass").value;
    let cpass = document.querySelector("#inpcpass").value;

    // Fetching error message elements for each input field
    let errname = document.querySelector("#errorname");
    let erremail = document.querySelector("#erroremail");
    let errnumber = document.querySelector("#errornum");
    let errpass = document.querySelector("#errorpass");
    let errcpass = document.querySelector("#errorcpass");

    // **1. Name validation**
    if (name === "") {
        // let inpname = document.querySelector("#inpname");
        // inpname.placeholder = "Not filled";  // Set placeholder to indicate missing input
        // inpname.style.border = "2px solid red";  // Highlight the input field
        errname.innerHTML = "Please enter your name";  // Display error message
        errname.style.color = "red";
        errname.style.fontSize = "30px";
        return false;  // Stop the function execution and return false
    }

    // **2. Phone Number Validation**
    else if (number === "" || isNaN(number) || number.length !== 10) {
        errnumber.innerHTML = "Please enter a valid 10-digit number";
        errnumber.style.color = "red";
        return false;
    }

    // **3. Email Validation**
    else if (email === "") {
        erremail.innerHTML = "Please enter your email";
        erremail.style.color = "red";
        return false;
    }
    else if (!(email.includes("@") && email.includes(".com"))) {
        erremail.innerHTML = "Please enter a valid email ID";
        erremail.style.color = "red";
        return false;
    }

    // **4. Password Validation**
    else if (pass === "") {
        errpass.innerHTML = "Password is required";
        errpass.style.color = "red";
        return false;
    }
    else if (pass.length < 6) {
        errpass.innerHTML = "Password must be at least 6 characters long";
        errpass.style.color = "red";
        return false;
    }

    // **5. Confirm Password Validation**
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

    // **6. Password Strength Validation**
    else if (!(
        pass.match(/[0-9]/) &&  // Checks if the password contains a number
        pass.match(/[!@#$%^&*]/) &&  // Checks if the password contains a special symbol
        pass.match(/[a-z]/) &&  // Checks if the password contains lowercase letters
        pass.match(/[A-Z]/)  // Checks if the password contains uppercase letters
    )) {
        errpass.innerHTML = "Password should contain numbers, symbols, uppercase & lowercase letters";
        errpass.style.color = "red";
        return false;
    }

    // If all validations pass, return true to allow form submission
    return true;
}
