function getComputerChoice() {
    let computerInput = Math.floor(Math.random() * 3) + 1;
    
    if (computerInput === 1) {
        computerOutput = "Rock";
    } else if (computerInput === 2) {
        computerOutput = "Paper";
    } else {
        computerOutput = "Scissors";
    }
    return computerOutput;
}

function getHumanChoice() {
    let HumanInput = prompt("Rock, Paper or Scissors?");

    if (HumanInput.toLowerCase() === "rock") {
        humanOutput = "Rock";
    } else if (HumanInput.toLowerCase() === "paper") {
        humanOutput = "Paper";
    } else if (HumanInput.toLowerCase() === "scissors") {
        humanOutput = "Scissors";
    }
    return humanOutput;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("You picked the same. It's a Draw!");
        } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            console.log("You Win! Rock beats Scissors");
            humanScore++;
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            console.log("You Win! Paper beats Rock");
            humanScore++;
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            console.log("You Win! Scissors beats Paper");
            humanScore++;
        } else if (humanChoice === "Rock" && computerChoice === "Paper") {
            console.log("You Lose! Paper beats Rock");
            computerScore++;
        } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
            console.log("You Lose! Scissors beats Paper");
            computerScore++;
        } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
            console.log("You Lose! Rock beats Scissors");
            computerScore ++;
        } 
    }

    for (let round = 1; round < 6; round++) {
        console.log("Round " + round + "!");
        playRound(getHumanChoice(),getComputerChoice());
    }
    
    if (humanScore > computerScore) {
        console.log("You are the Winner! Score: " + humanScore + "-" + computerScore);
    } else if (humanScore < computerScore) {
        console.log("The Computer is the Winner. Score: " + humanScore + "-" + computerScore);
    } else {
        console.log("It was a Draw! Score: " + humanScore + "-" + computerScore);
    }
}

playGame()