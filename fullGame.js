let userInp = document.querySelector("#guessNumInp");
let guessBtn = document.querySelector(".guessBtn");
let winner = document.querySelector(".winner");
let hint = document.querySelector(".hintText");
let turnText = document.querySelector(".whosTurn");
let resetBtn = document.querySelector("#reset");

let compAttemptText = document.querySelector("#compAttempt");
let humanAttemptText = document.querySelector("#humanAttempt");

let compGuessList = document.querySelector(".compGuessList");
let humanGuessList = document.querySelector(".humanGuessList");

let startGameBtn = document.querySelector("#startGameBtn");



let compSecret;
let humanSecret;

let userTurn;

let userAttempt;
let compAttempt;

let compGuesses;
let humanGuesses;

let low = 1;
let high = 100;

startGameBtn.addEventListener("click",startGame);

function getHumanSecret() {
  let humanSecret = Number(
    prompt("Enter Your Secret Number - between 1 to 100🤫"),
  );

  while (isNaN(humanSecret) || humanSecret < 1 || humanSecret > 100) {
    humanSecret = Number(
      prompt("Enter Your Secret Number - between 1 to 100🤫"),
    );
  }
  console.log(humanSecret);
  return humanSecret;
}

function getCompSecret() {
  let compSecret = Math.floor(Math.random() * 100) + 1;
  console.log(compSecret);
  return compSecret;
}

function startGame() {
  resetVariables();
  resetUI();
  compSecret = getCompSecret();
  humanSecret = getHumanSecret();
}

function isGameOver(msg) {
  winner.innerText = msg;
  hint.innerText = "..NO NEED..";
  turnText.innerText = "Found Our Winner!!";
  guessBtn.disabled = true;
  userInp.disabled = true;
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
    alert(
      `Your Attempts are over the Computer secret Number was ${compSecret}`,
    );
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

function resetUI() {
  hint.innerText = "🤔Let The Game Begin";
  winner.innerText = "No One Wins Yet!";
  turnText.innerText = "Your Turn";

  compGuessList.innerText = compGuesses.join(", ");
  humanGuessList.innerText = humanGuesses.join(", ");

  compAttemptText.innerText = compAttempt;
  humanAttemptText.innerText = userAttempt;

  userInp.disabled = false;
  guessBtn.disabled = false;
}

function resetVariables(){
  low = 1;
  high = 100;

  userTurn = true;

  compGuesses = [];
  humanGuesses = [];
  userAttempt = 0;
  compAttempt = 0;
}

function reset() {
  resetVariables();
  resetUI();
}

function compTurnGame() {
  if (compAttempt === 5) {
    alert(`Computer's Attempt are Over Human secret number was ${humanSecret}`);
    return;
  }

  let compGuess = Math.floor((low + high) / 2);
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

resetBtn.addEventListener("click", () => {
  reset();
});

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

