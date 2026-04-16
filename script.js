let humanScore= 0;
let computerScore = 0;

// DOM elements
const roundResult = document.getElementById("roundResult");
const scoreDisplay = document.getElementById("score");
const winnerDisplay = document.getElementById("winner");

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

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        roundResult.textContent = `It's a tie! Both chose ${humanChoice}`;
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundResult.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
    } 
    else {
        computerScore++;
        roundResult.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
    }

    // Update score display
    scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

// Check for winner
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            winnerDisplay.textContent = "🎉 You are the winner!";
        } else {
            winnerDisplay.textContent = "😢 Computer wins!";
        }

        // Disable buttons after game ends
        disableButtons();
    }
}

// Disable buttons
function disableButtons() {
    document.querySelectorAll("button").forEach(button => {
        button.disabled = true;
    });
}

// Event listeners
document.getElementById("rock").addEventListener("click", () => {
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", () => {
    playRound("paper");
});

document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors");
});