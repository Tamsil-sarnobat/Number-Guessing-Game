function getRandomNum(){
    let num = Math.floor(Math.random()*100)+1;
    return num;
}

function checkGuess(userGuess,computerNum){
    if(userGuess === computerNum){
        return "correct";
    }else if(userGuess > computerNum){
        return "lower";
    }else{
        return "higher";
    }
}

function showCount(count){
    return count;
}

let playAgain = "yes";

while(playAgain === "yes"){
    let computerNum = getRandomNum();
    let userGuess = Number(prompt("Guess the number"));
    let count = 0;
    let userStore = [];

    while(true){
        if(userStore.includes(userGuess)){
            userGuess = Number(prompt("Already guessed!"));
            continue;
        }else{
            count++;
            userStore.push(userGuess);
        }

        let result = checkGuess(userGuess,computerNum);
        if(result === "correct"){
            console.log("You won!");
            break;
        }else if(count >= 5){
            console.log(`You Lost! The number was ${computerNum}`);
            break;
        }else if(result === "lower"){
            userGuess = Number(prompt("Wrong guess! (Hint: guess lower)"));
        }else{
            userGuess = Number(prompt("Wrong guess! (Hint: guess higher)"));
        }
    }
    let atmp = showCount(count);
    console.log(`Attempt = ${atmp}`);
    console.log("Your Guesses..");
    for(let guess of userStore){
        console.log(guess);
    }
    playAgain = prompt("Play again??").toLowerCase();
}