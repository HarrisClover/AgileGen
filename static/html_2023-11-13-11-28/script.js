const jokeText = document.getElementById("jokeText");
const getJokeButton = document.getElementById("getJokeButton");

getJokeButton.addEventListener("click", getAnotherJoke);

function getAnotherJoke() {
    // Code to fetch and display a new joke
    fetch("https://api.example.com/jokes")
        .then(response => response.json())
        .then(data => {
            jokeText.textContent = data.joke;
            getJokeButton.classList.add("click-animation");
            setTimeout(() => {
                getJokeButton.classList.remove("click-animation");
            }, 300);
        })
        .catch(error => {
            console.log("Error:", error);
        });
}
