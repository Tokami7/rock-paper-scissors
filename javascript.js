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
console.log(getComputerChoice());
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

}