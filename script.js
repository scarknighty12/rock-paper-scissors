let humanScore= 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors:");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); //make input case-insensitive

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both players selected ${humanChoice}`)
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")  
    ) {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame() {
    for (i=1; i<=5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Final scores:");
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You are the winner!");
    } else if (humanScore < computerScore) {
        console.log("Better luck next time");
    } else {
        console.log("It's a tie!");
    }
}

playGame();
