const guessedLettersElement = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining")
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];


// placeholder symobols before any letters are guessed //
const placeholder = function(word){
    const placeholderLetter = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetter.push("●");
    }
    wordInProgress.innerText = placeholderLetter.join("")
};

placeholder(word);
 
button.addEventListener("click", function(e) {
    e.preventDefault();
    message.innerText = "";  //empties message paragraph
    const guess = letterInput.value;
    const goodGuess = playerInput(guess);

    if (goodGuess) {
        makeGuess(guess);
    }
    letterInput.value = "";
});

const playerInput = function(input) {
    const acceptedLetter = /[a-zA-Z]/; 
    if (input.length === 0) {
        message.innerText = "Please enter a letter"; 
    } else if (input.length > 1) {
        message.innerText = "Please enter a single letter";
    } else if (!input.match(acceptedLetter)){
        message.innerText = "Please enter a letter between A-Z";
    } else {
        return input;
    }
};

const makeGuess = function(guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "Try again, you alreaddy guessed that letter!"
    } else { 
        guessedLetters.push(guess);
        console.log(guessedLetters)
    }
};