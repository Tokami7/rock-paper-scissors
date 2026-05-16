const rock_btn = document.querySelector("#rock");
const paper_btn = document.querySelector("#paper");
const scissors_btn = document.querySelector("#scissors");
const score = document.querySelector(".score");
const text = document.querySelector(".text");

let humanScore = 0;
let computerScore = 0;

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
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        text.textContent = "You picked the same. It's a Draw!";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        text.textContent = "You Win! Rock beats Scissors";
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        text.textContent = "You Win! Paper beats Rock";
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        text.textContent = "You Win! Scissors beats Paper";
        humanScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        text.textContent = "You Lose! Paper beats Rock";
        computerScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        text.textContent = "You Lose! Scissors beats Paper";
        computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        text.textContent = "You Lose! Rock beats Scissors";
        computerScore ++;
    };

    score.textContent = `Score: Player ${humanScore} | Computer ${computerScore}`;
    
    if (humanScore === 5 ) {
        text.textContent = "You Win!";
    } else if (computerScore === 5) {
        text.textContent = "You Lose!";
    };
};


rock_btn.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
});
paper_btn.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
});
scissors_btn.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
});