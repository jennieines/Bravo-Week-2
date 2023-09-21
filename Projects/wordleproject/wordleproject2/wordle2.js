// Define an array of words for the game
let words = ["APPLE", "BEACH", "PIZZA", "GRAPE", "CHAIR", "CHICK", "TABLE", "DRINK", "CROWN"];

// Choose a random word from the array
let wordToGuess = words[Math.floor(Math.random() * words.length)];
let word = wordToGuess;

// Define the number of allowed guesses
let maxGuesses = 6;
let guessesLeft = maxGuesses;


// Function to check if the guessed letter is correct
function checkGuess(letter) {
  let isCorrect = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      correctGuesses[i] = true;
      isCorrect = true;
    }
  }
  return isCorrect;
}

// Function to display the current state of the word
function displayWord() {
  let displayedWord = "";
  for (let i = 0; i < word.length; i++) {
    if (correctGuesses[i]) {
      displayedWord += word[i];
    } else {
      displayedWord += "_";
    }
  }
  return displayedWord;
}

// Function to handle a guess
function handleGuess() {
  let guessInput = document.getElementById("guess-input");
  let guess = guessInput.value.toUpperCase();

  if (guess.length === 1 && /^[A-Z]$/.test(guess)) {
    if (checkGuess(guess)) {
      // Correct guess
      let displayedWord = displayWord();
      document.getElementById("word-display").textContent = displayedWord;

      // Check if the word has been completely guessed
      if (!displayedWord.includes("_")) {
        // Player won
        alert("Congratulations! You guessed the word: " + word);
      }
    } else {
      // Incorrect guess
      guessesLeft--;
      if (guessesLeft === 0) {
        // Player lost
        alert("Sorry, you're out of guesses. The word was: " + word);
      } else {
        alert("Incorrect guess. " + guessesLeft + " guesses left.");
      }
    }
  } else {
    // Invalid input
    alert("Please enter a single uppercase letter.");
  }

  // Clear the input field
  guessInput.value = "";
}

  // Attach an event listener to the guess button
let guessButton = document.getElementById("guess-button");
guessButton.addEventListener("click", handleGuess);

function handleEnterKey(event) {
  if (event.key === "Enter") {
    handleGuess();
  }
}

  // Attach an event listener to the guess input for Enter key press
let guessInput = document.getElementById("guess-input");
guessInput.addEventListener("keyup", handleEnterKey);