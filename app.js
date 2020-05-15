let btn = document.querySelector(".ba-password-btn");
let passwordEl = document.querySelector(".ba-title");



let userLogin = document.getElementById("admin-login");
let userPassword = document.getElementById("admin-password");

function showPassword() {

    if (userLogin.value == "Admin") {
        passwordEl.textContent = "Hello " + userLogin.value;
        btn.textContent = "Enter password ";
        userLogin.style.display = "none";
        userPassword.style.display = "inline-block";

        if (userPassword.value == "password") {
            passwordEl.textContent = "welcome!";
        }
        else {
            passwordEl.textContent = "invalid password";
        }

    } else if (userLogin.value == "") {
        passwordEl.textContent = "Cancel";
    }
    else {
        passwordEl.textContent = "invalid user name"
    }
    console.log(typeof userInput.value)
}

btn.addEventListener("click", showPassword);