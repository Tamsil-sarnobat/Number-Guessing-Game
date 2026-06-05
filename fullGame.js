let userInp = document.querySelector("#guessNumInp");
let guessBtn = document.querySelector(".guessBtn");
let winner = document.querySelector(".winner");
let hint = document.querySelector(".hintText");
let turnText = document.querySelector(".whosTurn");
let resetBtn = document.querySelector("#reset");

let humanAttemptText = document.querySelector("#humanAttempt");
let compAttemptText = document.querySelector("#compAttempt");

let compGuessList = document.querySelector(".compGuessList");
let humanGuessList = document.querySelector(".humanGuessList");

let compSecret = Math.floor(Math.random() * 100) + 1;
let userTurn = true;
console.log(compSecret);

let humanSecret = Number(
  prompt("Enter Your Secret Number - between 1 to 100🤫"),
);

while(
  isNaN(humanSecret) ||
  humanSecret < 1 ||
  humanSecret > 100
){
  humanSecret = Number(
  prompt("Enter Your Secret Number - between 1 to 100🤫"),
);
}
console.log(humanSecret);

let userAttempt = 0;
let compAttempt = 0;

let gameOver = false;

let compGuesses = [];
let humanGuesses = [];

guessBtn.addEventListener("click", () => {
  let userGuesses = Number(userInp.value);

  if (userGuesses > 100 || userGuesses < 1 || isNaN(userGuesses)) {
    alert("Enter Number between 1 to 100");
    return;
  }
  if (userTurn) {
    if (humanGuesses.includes(userGuesses)) {
      alert("Already guessed!");
      return;
    }

    let won = userTurnGame(userGuesses);

    if (won) return;

    userTurn = false;
    turnText.innerText = "Do Not Type -> COMPUTER TURN";
  }

  setTimeout(() => {
    if (userTurn === false) {
      compTurnGame();
      userTurn = true;
      turnText.innerText = "Your TURN";
    }
  }, 2000);
  userInp.value = "";
});

function isGameOver(msg, turnMsg) {
  winner.innerText = msg;
  hint.innerText = "..NO NEED..";
  turnText.innerText = "Found Our Winner!!";
  guessBtn.disabled = true;
  userInp.disabled = true;
  gameOver = true;
}

function userTurnGame(userGuess) {
  userAttempt++;
  humanAttemptText.innerText = userAttempt;
  humanGuesses.push(userGuess);
  humanGuessList.innerText = humanGuesses.join(", ");

  

  if (userGuess === compSecret) {
    isGameOver("You Won!");
    return true;
  }

  if (userAttempt === 5) {
    alert("Your Attempts are Over");
    userTurn = false;
    guessBtn.disabled = true;
    userInp.disabled = true;
    return;
  }

  if (userGuess > compSecret) {
    hint.innerText = "Lower";
  } else {
    hint.innerText = "Higher";
  }

  return false;
}

function reset() {
  userInp.disabled = false;
  guessBtn.disabled = false;

  hint.innerText = "🤔Let The Game Begin";
  winner.innerText = "No One Wins Yet!";
  turnText.innerText = "Your Turn";

  low = 1;
  high = 100;

  compSecret = Math.floor(Math.random() * 100) + 1;

  if (confirm("Do you want to start a new game?")) {
    humanSecret = Number(
      prompt("Enter Your Secret Number - between 1 to 100🤫"),
    );
  }

  userTurn = true;

  compGuesses = [];
  humanGuesses = [];
  userAttempt = 0;
  compAttempt = 0;
  compAttemptText.innerText = compAttempt;
  compGuessList.innerText = compGuesses.join(", ");
  humanAttemptText.innerText = userAttempt;
  humanGuessList.innerText = humanGuesses.join(", ");
}

resetBtn.addEventListener("click", () => {
  reset();
});

let low = 1;
let high = 100;
function compTurnGame() {
  if (compAttempt === 5) {
    alert("Computer's Attempt are Over");
    return;
  }

  let compGuess;
  compGuess = Math.floor((low + high) / 2);
  console.log("Computer Guesses -> ", compGuess);

  compAttempt++;
  compGuesses.push(compGuess);
  compAttemptText.innerText = compAttempt;
  compGuessList.innerText = compGuesses.join(", ");

  if (compGuess === humanSecret) {
    isGameOver("Computer Won!");
    return;
  } else if (compGuess > humanSecret) {
    high = compGuess - 1;
  } else {
    low = compGuess + 1;
  }

  userTurn = true;
}
