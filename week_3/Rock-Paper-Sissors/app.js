function getRandomInt() {
  return Math.floor(Math.random() * (2 + 1));
}
var options = ["rock", "paper", "scissors"];
var compGuess = options[getRandomInt];
var userGuess = options[getRandomInt];

console.log("You picked " + userGuess);
console.log("The computer picked " + compGuess);

if (userGuess == compGuess) {
  console.log("It's a tie!!");
} else if (userGuess == "rock" && compGuess == "paper") {
  console.log("Paper covers rock. You lose!!");
} else if (userGuess == "rock" && compGuess == "scissors") {
  console.log("Rock crushes scissors. You win!!");
} else if (userGuess == "paper" && compGuess == "rock") {
  console.log("Paper covers rock. You win!!");
} else if (userGuess == "paper" && compGuess == "scissors") {
  console.log("Scissors cut paper. You lose!!");
} else if (userGuess == "scissors" && compGuess == "rock") {
  console.log("Rock crushes scissors. You lose!!");
} else if (userGuess == "scissors" && compGuess == "paper") {
  console.log("Scissors cut paper. You win!!");
}
