
document.getElementById("password").addEventListener("input", function() {
    var password = this.value;
    var strengthMeter = document.getElementById("strength-meter");
    
    if (password.length < 6) {
        strengthMeter.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    } else if (password.length < 10) {
        strengthMeter.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
        strengthMeter.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    }
});
