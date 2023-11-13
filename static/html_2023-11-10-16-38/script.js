document.getElementById("password").addEventListener("input", function() {
    var passwordInput = this.value;
    var background = document.querySelector("body");

    // Remove existing blur classes
    background.classList.remove("blur-weak", "blur-medium", "blur-strong");

    if (passwordInput.length < 6) {
        background.classList.add("blur-weak");
    } else if (passwordInput.length >= 6 && passwordInput.length < 10) {
        background.classList.add("blur-medium");
    } else {
        background.classList.add("blur-strong");
    }
});
