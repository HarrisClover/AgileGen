
document.getElementById("submit-btn").addEventListener("click", function() {
    var passwordInput = document.getElementById("password").value;
    var background = document.querySelector("body");

    if (passwordInput.length < 6) {
        background.classList.add("blur-weak");
    } else if (passwordInput.length >= 6 && passwordInput.length < 10) {
        background.classList.add("blur-medium");
    } else {
        background.classList.add("blur-strong");
    }
});
