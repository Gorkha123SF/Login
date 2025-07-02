const password = document.getElementById("password");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("passwordForm");
const showPassword = document.getElementById("showPassword");

function validatePassword() {
    if (password.value === "Life less ordinary") {
        message.textContent = "Password is correct ✅";
        message.className = "valid";
        submitBtn.disabled = false;
    } else {
        message.textContent = "Incorrect password ❌";
        message.className = "invalid";
        submitBtn.disabled = true;
    }
}

// Prevent form submission if password is incorrect
form.addEventListener("submit", function (event) {
    if (password.value !== "Life less ordinary") {
        event.preventDefault(); // Stop form from submitting
        message.textContent = "Incorrect password, please try again ❌";
        message.className = "invalid";
    }
});

// Show or hide password
showPassword.addEventListener("change", function () {
    password.type = showPassword.checked ? "text" : "password";
});

password.addEventListener("input", validatePassword);
