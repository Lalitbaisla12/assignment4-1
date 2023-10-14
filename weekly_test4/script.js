function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usernamePattern = /^[A-Z][a-zA-Z0-9]{7,}$/;
    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    if (usernamePattern.test(username) && passwordPattern.test(password)) {
        alert("Form submitted successfully!\nUsername: " + username + "\nPassword: " + password);
    } else {
        alert("Invalid username or password! Username should start with an uppercase letter, have at least 8 characters, and contain one number. Password should have at least 8 characters, one special character, and one number.");
    }
}
