var currentQuestion = 1;

document.querySelectorAll(".submit-btn").forEach(function(button) {
  button.addEventListener("click", function() {
    // Get selected answer
    var selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
    
    // Record the answer (backend functionality not implemented)
    
    // Hide current question
    document.getElementById("question-container-" + currentQuestion).style.display = "none";
    
    // Show next question
    currentQuestion++;
    document.getElementById("question-container-" + currentQuestion).style.display = "block";
    
    // Clear selected answer
    document.querySelector('input[name="answer"]:checked').checked = false;
  });
});
