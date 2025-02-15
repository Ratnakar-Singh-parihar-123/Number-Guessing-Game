let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById("guess").value);
    const message = document.getElementById("message");
    const attemptsCounter = document.getElementById("attempts");

    if (isNaN(guess)) {
        message.textContent = "Please enter a valid number!";
        message.style.color = "red";
        return;
    }

    attempts++;
    attemptsCounter.textContent = attempts;

    if (guess === randomNumber) {
        message.textContent = "Congratulations! You guessed the right number!";
        message.style.color = "green";
    } else if (guess > randomNumber) {
        message.textContent = "Too high! Try again.";
        message.style.color = "orange";
    } else {
        message.textContent = "Too low! Try again.";
        message.style.color = "orange";
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById("guess").value = '';
    document.getElementById("message").textContent = '';
    document.getElementById("attempts").textContent = attempts;
}