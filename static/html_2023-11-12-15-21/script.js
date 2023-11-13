
document.getElementById("submit-btn").addEventListener("click", function() {
  // Get selected answer
  var selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
  
  // Record the answer (backend functionality not implemented)
  
  // Display next question (backend functionality not implemented)
  
  // Clear selected answer
  document.querySelector('input[name="answer"]:checked').checked = false;
});
