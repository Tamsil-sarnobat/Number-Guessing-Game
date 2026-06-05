//first

function greet(name) {
  console.log(`Hello ${name}`);
}

//second
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

//third
function checkBiggest(a, b, c) {
  if (a === b && b === c) {
    return `Numbers are same`;
  } else if (a === b) {
    if (a > c) {
      return `${a} and ${b} are same and Larger than ${c}`;
    } else {
      return `${a} and ${b} are same`;
    }
  } else if (a === c) {
    return `${a} and ${c} are same`;
  } else if (b === c) {
    return `${b} and ${c} are same`;
  } else {
    if (a > b && a > c) {
      return `${a} is greater`;
    } else if (b > c) {
      return `${b} is greater`;
    } else {
      return `${c} is greater`;
    }
  }
}

//fourth
function getRandomNumber() {
  let num = Math.floor(Math.random() * 100) + 1;
  return num;
}

//fifth
function checkGuess(userGuess, actualNumber) {
  if (userGuess === actualNumber) {
    return "correct";
  } else if (userGuess > actualNumber) {
    return "lower";
  } else {
    return "higher";
  }
}

//sixth

function showAttempts(count) {
  console.log(count);
}

// //seventh

// let playAgain = "yes";

// while (playAgain === "yes") {
//   let userGuess = Number(prompt("Guess the number"));
//   let computerNum = getRandomNumber();
//   let count = 0;
//   while (true) {
//     count++;
//     let result = checkGuess(userGuess, computerNum);
//     if (result === "correct") {
//       console.log("you Won!");
//       break;
//     } else if (count >= 5) {
//       console.log(`game over! The number was = ${computerNum}`);
//       break;
//     } else if (result === "lower") {
//       userGuess = Number(prompt("Wrong Guess! (Hint: Guess Lower)"));
//     } else {
//       userGuess = Number(prompt("Wrong Guess! (Hint: Guess Higher)"));
//     }
//   }
//   showAttempts(count);
//   playAgain = prompt("Play again?").toLowerCase();
// }

// ==================== Stage 4 ======================

//first
// let userGuess = Number(prompt("Guess the number"));
// let userNums = [];
// userNums.push(userGuess);

let playAgain = "yes";

while (playAgain === "yes") {
  let userGuess = Number(prompt("Guess the number"));
  let computerNum = getRandomNumber();
  let count = 0;
  let userNums = [];

  while (true) {
    if (userNums.includes(userGuess)) {
      userGuess = Number(prompt("Already Guessed!"));
      continue;
    } else {
      count++;
      userNums.push(userGuess);
    }
    let result = checkGuess(userGuess, computerNum);
    if (result === "correct") {
      console.log("you Won!");
      break;
    } else if (count >= 5) {
      console.log(`game over! The number was = ${computerNum}`);
      break;
    } else if (result === "lower") {
      userGuess = Number(prompt("Wrong Guess! (Hint: Guess Lower)"));
    } else {
      userGuess = Number(prompt("Wrong Guess! (Hint: Guess Higher)"));
    }
  }
  showAttempts(count);
  playAgain = prompt("Play again?").toLowerCase();
  console.log("Your guesses");
    for (let guesses of userNums) {
      console.log(guesses);
    }
}
