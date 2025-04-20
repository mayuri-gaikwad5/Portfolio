// Function to validate first name
document.getElementById("firstname").addEventListener("input", function () {
    const firstName = this.value.trim();
    const error = document.getElementById("firstnameError");
    
    if (!/^[A-Za-z]{3,}$/.test(firstName)) {
        error.textContent = "First name must contain only alphabets and be at least 3 characters long.";
        this.style.border = "2px solid red";
    } else {
        error.textContent = "";
        this.style.border = "2px solid green";
    }
});

// Function to validate last name
document.getElementById("lastname").addEventListener("input", function () {
    const lastName = this.value.trim();
    const error = document.getElementById("lastnameError");

    if (!/^[A-Za-z]{3,}$/.test(lastName)) {
        error.textContent = "Last name must contain only alphabets and be at least 3 characters long.";
        this.style.border = "2px solid red";
    } else {
        error.textContent = "";
        this.style.border = "2px solid green";
    }
});

// Function to validate email
document.getElementById("email").addEventListener("input", function () {
    const email = this.value.trim();
    const error = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        error.textContent = "Enter a valid email (e.g., name@domain.com)";
        this.style.border = "2px solid red";
    } else {
        error.textContent = "";
        this.style.border = "2px solid green";
    }
});

// Function to validate password
document.getElementById("password").addEventListener("input", function () {
    const password = this.value;
    const error = document.getElementById("passwordError");

    if (password.length < 6 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
        error.textContent = "Password must be at least 6 characters long, contain at least one uppercase letter, and one number.";
        this.style.border = "2px solid red";
    } else {
        error.textContent = "";
        this.style.border = "2px solid green";
    }
});

// Function to validate phone number
document.getElementById("phone").addEventListener("input", function () {
    let phone = this.value.replace(/\D/g, ""); // Remove non-numeric characters
    const error = document.getElementById("phoneError");

    if (phone.length > 10) {
        phone = phone.slice(0, 10); // Restrict to 10 digits
    }
    this.value = phone;

    if (phone.length !== 10) {
        error.textContent = "Phone must be exactly 10 digits.";
        this.style.border = "2px solid red";
    } else {
        error.textContent = "";
        this.style.border = "2px solid green";
    }
});

// Function to validate address
document.getElementById("address").addEventListener("input", function () {
    const address = this.value.trim();
    const error = document.getElementById("addressError");

    if (address === "") {
        error.textContent = "Address cannot be empty.";
        this.style.border = "2px solid red";
    } else {
        error.textContent = "";
        this.style.border = "2px solid green";
    }
});

// Prevent form submission if any field is invalid
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

// Function to validate form before submission
function validateForm() {
    let isValid = true;
    const fields = ["firstname", "lastname", "email", "password", "phone", "address"];
    
    fields.forEach(field => {
        const input = document.getElementById(field);
        const error = document.getElementById(field + "Error");

        if (error.textContent !== "") {
            input.style.border = "2px solid red";
            isValid = false;
        }
    });

    return isValid;
}
