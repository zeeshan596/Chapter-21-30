let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
if (userGuess === secretNumber) {
  document.writeln(`Congratulations! You guessed the secret number: ${secretNumber}`);
} else {
  document.writeln(`Sorry! The secret number was: ${secretNumber}`);
}