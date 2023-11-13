
document.getElementById("confirmButton").addEventListener("click", function() {
  var verificationCode = document.getElementById("verificationCode").value;
  if (verificationCode === "123456") {
    alert("Email address confirmed!");
  } else {
    alert("Incorrect verification code. Please try again.");
  }
});

document.getElementById("resendCodeLink").addEventListener("click", function(event) {
  event.preventDefault();
  alert("New verification code sent to cool_guy@email.com");
});
