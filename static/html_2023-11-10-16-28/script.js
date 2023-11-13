document.getElementById("password").addEventListener("input", function() {
    var password = this.value;
    var strengthMeter = document.getElementById("strength-meter");
    var body = document.body;
    
    if (password.length < 6) {
        strengthMeter.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        body.style.filter = "blur(10px)";
    } else if (password.length < 10) {
        strengthMeter.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        body.style.filter = "blur(5px)";
    } else {
        strengthMeter.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        body.style.filter = "blur(0px)";
    }
});
