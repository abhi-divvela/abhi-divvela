// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Initialize attempts counter
let attempts = 0;

// Start the game
while (attempts < 5) {
    // Prompt the user to make a guess
    const guess = parseInt(prompt("Guess a number between 1 and 100:"));

    // Increment attempts
    attempts++;

    // Check if the guess is correct
    if (guess === secretNumber) {
        alert("Congratulations! You've guessed the number!");
        break; // Exit the loop if the guess is correct
    } else if (guess < secretNumber) {
        alert("The number is low");
    } else {
        alert("The number is high");
    }
}

// If the player couldn't guess the number in 5 attempts
if (attempts === 5) {
    alert("Game over! The correct number was "+ secretNumber);
}