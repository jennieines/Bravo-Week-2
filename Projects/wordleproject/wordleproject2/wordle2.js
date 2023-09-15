//G = green 

let word1 = "apple"
let guess1 = "apply"

//console.log("GGGGX");

//compare two words to each other
//console.log a string representing which letters match

let word2 = "plays"
let guess2 = "ponds"

//console.log("GXXXG");

let word3 = "ducks";
let guess3 = "cakes";

//console.log("YXYXG");

function checkGuess(secretWord, guess) {
  //create a variable to build our result string in
  let result = ""; 
  //loop through each letter of the guess
  for (let i = 0; i < guess.length; i++) {
     //check if letters at current position match
    if (guess[i] == secretWord[i]) {
    //if so, add "G" to my result string
        result += "G"; 
        //if not, check if letter in guess is in word at all
    } else if (secretWord.includes(guess[i])) {
    //if so, add "Y" to my result string 
        result += "Y";
    } else {//if not
    //add "X" to my result string
    result += "X"
}
  }
  //log out the result string
  console.log(result);
}

//checkGuess(word1, guess1)
// //"GGGGX"

checkGuess(word2, guess2)
// //"GXXXG"

// checkGuess(word3, guess3)
// // "YXYXG"

// let myLetter = "A"

// if (myLetter.toLowerCase() == "a") {
//   console.log("message");
// }

// let resultString = "";
// let myWord = "alone";
// let vowels = "aeiou";

// for (let i = 0; i < myWord.length; i++) { //loop through word
//   if (vowels.includes(myWord[i])) { //check on a particular condition
//     resultString += myWord[i] //add something onto a string if condition is met
//   } else {
//     resultString += "_"; //if condition not met, add something else to string
//   }
// }
// console.log(resultString);//log out the resulting string


// function greeting(name) {
//   console.log("Hello " + name);
// }

// greeting("Cody");

// let myName = "Timmy"

// greeting(myName);

// // a + 2b + 3c

// // a = 1, b = 5, c = 4
