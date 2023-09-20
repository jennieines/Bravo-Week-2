let words = ["APPLE", "BEACH", "PIZZA", "GRAPE", "CHAIR", "CHICK", "TABLE", "DRINK", "CROWN"];
let wordToGuess = Math.floor(Math.random() * words.length);
let randomWord = words[wordToGuess];
let word = randomWord;


function checkWord(guess) {
if (guess.toLowerCase() === word) {
  alert("Congratulations! You guessed the word: " + wordToGuess);

} else {
  console.log("Incorrect guess: " + guess);

    }
}

let guessInput = document.getElementById("guess-input");
let guessButton = document.getElementById("guess-button");

guessButton.addEventListener("click", function() {
  let guess = guessInput.value.toLowerCase();
  checkWord(guess);
});
// let currentRow = document.getElementById(`row${guess}`)
// let letters = currentRow.children;


