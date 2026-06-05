//first

function checkHumanGuess(humanGuess, computerSecret) {
  if (humanGuess === computerSecret) {
    return "correct";
  } else if (humanGuess > computerSecret) {
    return "lower";
  } else {
    return "higher";
  }
}

//second

// let humanSecret = Number(prompt("Enter your secret number"));
// let computerSecret = Math.floor(Math.random() * 100) + 1;

// //third
// let humanAttempt = 0;
// let humanGuessesStore = [];
// let humanGuess = Number(prompt("Guess the number: "));

// while (true) {
//   let humanResult = checkHumanGuess(humanGuess, computerSecret);

//   if (humanGuessesStore.includes(humanGuess)) {
//     humanGuess = Number(prompt("Already Guessed!"));
//     continue;
//   } else {
//     humanAttempt++;
//     humanGuessesStore.push(humanGuess);
//   }

//   if (humanResult === "correct") {
//     console.log("Congratulations! You won!");
//     break;
//   } else if (humanAttempt >= 5) {
//     console.log(`You Lose! The number was ${computerSecret}`);
//     break;
//   } else if (humanResult === "lower") {
//     humanGuess = Number(prompt("Wrong guess! (Hint: Guess Lower)"));
//   } else {
//     humanGuess = Number(prompt("Wrong guess! (Hint: Guess Higher)"));
//   }

// }

// console.log("Attempt = ",humanAttempt);

//   console.log("Your Guesses...");
//   for (let humanGuess of humanGuessesStore) {
//     console.log(humanGuess);
//   }



let humanSecret = Number(prompt("Enter Your secret Number"));

function computerGuess(low,high){
     let num = Math.floor((low+high)/2);
     return num;
}


function checkCompGuess(computerGuess,humanSecret){
    if(computerGuess === humanSecret){
        return "correct";
    }else if(computerGuess > humanSecret){
        return "lower";
    }else{
        return "higher";
    }
}


let low = 1;
let high = 100;
let compAttempt = 0;
let compGuessArr = [];

while(true){
    let compGuess = computerGuess(low,high);
    compAttempt++;
    compGuessArr.push(compGuess);
    let compRes = checkCompGuess(compGuess,humanSecret);

    if(compRes === "correct"){
        console.log("Congratulation, you won!");
        break;
    }else if(compAttempt >= 5){
        console.log(`You Lose! The Number was ${humanSecret}`);
        break;
    }else if(compRes === "lower"){
        console.log("Wrong Guess! (Hint: Guess Lower)");
        high = compGuess - 1;
    }else{
        console.log("Wrong Guess! (Hint: Guess higher)");
        low = compGuess + 1;
    }

}

console.log(`Attempt = ${compAttempt}`);
console.log(`Your Guesses...`);
for(let guess of compGuessArr){
    console.log(guess);
}
